import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type DeckKeySpecifier = ('cards' | 'id' | DeckKeySpecifier)[];
export type DeckFieldPolicy = {
	cards?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameKeySpecifier = ('id' | 'table' | GameKeySpecifier)[];
export type GameFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	table?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationRootKeySpecifier = ('createRoom' | 'createUser' | MutationRootKeySpecifier)[];
export type MutationRootFieldPolicy = {
	createRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	createUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryRootKeySpecifier = ('rooms' | QueryRootKeySpecifier)[];
export type QueryRootFieldPolicy = {
	rooms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoomKeySpecifier = ('deck' | 'game' | 'id' | 'name' | 'users' | RoomKeySpecifier)[];
export type RoomFieldPolicy = {
	deck?: FieldPolicy<any> | FieldReadFunction<any>,
	game?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionRootKeySpecifier = ('interval' | SubscriptionRootKeySpecifier)[];
export type SubscriptionRootFieldPolicy = {
	interval?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('id' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCardKeySpecifier = ('card' | 'id' | 'userId' | UserCardKeySpecifier)[];
export type UserCardFieldPolicy = {
	card?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Deck?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeckKeySpecifier | (() => undefined | DeckKeySpecifier),
		fields?: DeckFieldPolicy,
	},
	Game?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameKeySpecifier | (() => undefined | GameKeySpecifier),
		fields?: GameFieldPolicy,
	},
	MutationRoot?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationRootKeySpecifier | (() => undefined | MutationRootKeySpecifier),
		fields?: MutationRootFieldPolicy,
	},
	QueryRoot?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryRootKeySpecifier | (() => undefined | QueryRootKeySpecifier),
		fields?: QueryRootFieldPolicy,
	},
	Room?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoomKeySpecifier | (() => undefined | RoomKeySpecifier),
		fields?: RoomFieldPolicy,
	},
	SubscriptionRoot?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionRootKeySpecifier | (() => undefined | SubscriptionRootKeySpecifier),
		fields?: SubscriptionRootFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserCard?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserCardKeySpecifier | (() => undefined | UserCardKeySpecifier),
		fields?: UserCardFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;