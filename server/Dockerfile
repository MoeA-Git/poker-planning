# Stage 1: Build
FROM lukemathwalker/cargo-chef:latest-rust-latest as chef
WORKDIR /app

# Copy source code and build dependencies
FROM chef as planner
COPY . .
RUN cargo chef prepare --recipe-path recipe.json

# Build dependencies and application
FROM chef as builder
COPY --from=planner /app/recipe.json recipe.json
RUN cargo chef cook --release --recipe-path recipe.json
COPY . .
RUN cargo build --release --bin poker-planning

# Stage 2: Runtime
FROM ubuntu:22.04 AS runtime
WORKDIR /app
RUN apt-get update -y \
  && apt-get install -y --no-install-recommends openssl \
  && apt-get autoremove -y \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/*
COPY --from=builder /app/target/release/poker-planning poker-planning
COPY /configuration configuration
ENV APP_ENVIRONMENT production
ENTRYPOINT ["./poker-planning"]