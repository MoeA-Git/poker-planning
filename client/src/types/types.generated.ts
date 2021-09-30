export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A UUID is a unique 128-bit number, stored as 16 octets. UUIDs are parsed as Strings
   * within GraphQL. UUIDs are used to assign unique identifiers to entities without requiring a central
   * allocating authority.
   *
   * # References
   *
   * * [Wikipedia: Universally Unique Identifier](http://en.wikipedia.org/wiki/Universally_unique_identifier)
   * * [RFC4122: A Universally Unique IDentifier (UUID) URN Namespace](http://tools.ietf.org/html/rfc4122)
   */
  UUID: string;
};

export type Deck = {
  __typename?: 'Deck';
  cards: Array<Scalars['String']>;
  id: Scalars['UUID'];
};

export type Game = {
  __typename?: 'Game';
  id: Scalars['UUID'];
  table: Array<UserCard>;
};

export type MutationRoot = {
  __typename?: 'MutationRoot';
  createRoom: Room;
  createUser: User;
};


export type MutationRootCreateRoomArgs = {
  name?: Maybe<Scalars['String']>;
};


export type MutationRootCreateUserArgs = {
  name?: Maybe<Scalars['String']>;
  roomId?: Maybe<Scalars['UUID']>;
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  rooms: Array<Room>;
};

export type Room = {
  __typename?: 'Room';
  deck: Deck;
  game: Game;
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  users: Array<User>;
};

export type SubscriptionRoot = {
  __typename?: 'SubscriptionRoot';
  interval: Scalars['Int'];
};


export type SubscriptionRootIntervalArgs = {
  n?: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['UUID'];
  username?: Maybe<Scalars['String']>;
};

export type UserCard = {
  __typename?: 'UserCard';
  card: Scalars['String'];
  id: Scalars['UUID'];
  userId: Scalars['Int'];
};