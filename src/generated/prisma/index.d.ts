
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Tour
 * 
 */
export type Tour = $Result.DefaultSelection<Prisma.$TourPayload>
/**
 * Model TourType
 * 
 */
export type TourType = $Result.DefaultSelection<Prisma.$TourTypePayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model TripDate
 * 
 */
export type TripDate = $Result.DefaultSelection<Prisma.$TripDatePayload>
/**
 * Model Itinerary
 * 
 */
export type Itinerary = $Result.DefaultSelection<Prisma.$ItineraryPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model VibeVideo
 * 
 */
export type VibeVideo = $Result.DefaultSelection<Prisma.$VibeVideoPayload>
/**
 * Model TripPricing
 * 
 */
export type TripPricing = $Result.DefaultSelection<Prisma.$TripPricingPayload>
/**
 * Model Faq
 * 
 */
export type Faq = $Result.DefaultSelection<Prisma.$FaqPayload>
/**
 * Model BookingSession
 * 
 */
export type BookingSession = $Result.DefaultSelection<Prisma.$BookingSessionPayload>
/**
 * Model BookingItem
 * 
 */
export type BookingItem = $Result.DefaultSelection<Prisma.$BookingItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const SharingType: {
  DOUBLE: 'DOUBLE',
  TRIPLE: 'TRIPLE',
  SINGLE: 'SINGLE',
  QUAD: 'QUAD'
};

export type SharingType = (typeof SharingType)[keyof typeof SharingType]


export const BookingSessionStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED'
};

export type BookingSessionStatus = (typeof BookingSessionStatus)[keyof typeof BookingSessionStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type SharingType = $Enums.SharingType

export const SharingType: typeof $Enums.SharingType

export type BookingSessionStatus = $Enums.BookingSessionStatus

export const BookingSessionStatus: typeof $Enums.BookingSessionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tour`: Exposes CRUD operations for the **Tour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tours
    * const tours = await prisma.tour.findMany()
    * ```
    */
  get tour(): Prisma.TourDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourType`: Exposes CRUD operations for the **TourType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourTypes
    * const tourTypes = await prisma.tourType.findMany()
    * ```
    */
  get tourType(): Prisma.TourTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripDate`: Exposes CRUD operations for the **TripDate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripDates
    * const tripDates = await prisma.tripDate.findMany()
    * ```
    */
  get tripDate(): Prisma.TripDateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itinerary`: Exposes CRUD operations for the **Itinerary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Itineraries
    * const itineraries = await prisma.itinerary.findMany()
    * ```
    */
  get itinerary(): Prisma.ItineraryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vibeVideo`: Exposes CRUD operations for the **VibeVideo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VibeVideos
    * const vibeVideos = await prisma.vibeVideo.findMany()
    * ```
    */
  get vibeVideo(): Prisma.VibeVideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripPricing`: Exposes CRUD operations for the **TripPricing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripPricings
    * const tripPricings = await prisma.tripPricing.findMany()
    * ```
    */
  get tripPricing(): Prisma.TripPricingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.faq`: Exposes CRUD operations for the **Faq** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faqs
    * const faqs = await prisma.faq.findMany()
    * ```
    */
  get faq(): Prisma.FaqDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingSession`: Exposes CRUD operations for the **BookingSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingSessions
    * const bookingSessions = await prisma.bookingSession.findMany()
    * ```
    */
  get bookingSession(): Prisma.BookingSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingItem`: Exposes CRUD operations for the **BookingItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingItems
    * const bookingItems = await prisma.bookingItem.findMany()
    * ```
    */
  get bookingItem(): Prisma.BookingItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Booking: 'Booking',
    Review: 'Review',
    Tour: 'Tour',
    TourType: 'TourType',
    Trip: 'Trip',
    TripDate: 'TripDate',
    Itinerary: 'Itinerary',
    Category: 'Category',
    VibeVideo: 'VibeVideo',
    TripPricing: 'TripPricing',
    Faq: 'Faq',
    BookingSession: 'BookingSession',
    BookingItem: 'BookingItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "booking" | "review" | "tour" | "tourType" | "trip" | "tripDate" | "itinerary" | "category" | "vibeVideo" | "tripPricing" | "faq" | "bookingSession" | "bookingItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Tour: {
        payload: Prisma.$TourPayload<ExtArgs>
        fields: Prisma.TourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          findFirst: {
            args: Prisma.TourFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          findMany: {
            args: Prisma.TourFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          create: {
            args: Prisma.TourCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          createMany: {
            args: Prisma.TourCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          delete: {
            args: Prisma.TourDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          update: {
            args: Prisma.TourUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          deleteMany: {
            args: Prisma.TourDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          upsert: {
            args: Prisma.TourUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          aggregate: {
            args: Prisma.TourAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTour>
          }
          groupBy: {
            args: Prisma.TourGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourCountArgs<ExtArgs>
            result: $Utils.Optional<TourCountAggregateOutputType> | number
          }
        }
      }
      TourType: {
        payload: Prisma.$TourTypePayload<ExtArgs>
        fields: Prisma.TourTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          findFirst: {
            args: Prisma.TourTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          findMany: {
            args: Prisma.TourTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>[]
          }
          create: {
            args: Prisma.TourTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          createMany: {
            args: Prisma.TourTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>[]
          }
          delete: {
            args: Prisma.TourTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          update: {
            args: Prisma.TourTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          deleteMany: {
            args: Prisma.TourTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>[]
          }
          upsert: {
            args: Prisma.TourTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourTypePayload>
          }
          aggregate: {
            args: Prisma.TourTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourType>
          }
          groupBy: {
            args: Prisma.TourTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TourTypeCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      TripDate: {
        payload: Prisma.$TripDatePayload<ExtArgs>
        fields: Prisma.TripDateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripDateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripDateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDatePayload>
          }
          findFirst: {
            args: Prisma.TripDateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripDateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDatePayload>
          }
          findMany: {
            args: Prisma.TripDateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDatePayload>[]
          }
          create: {
            args: Prisma.TripDateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDatePayload>
          }
          createMany: {
            args: Prisma.TripDateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripDateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDatePayload>[]
          }
          delete: {
            args: Prisma.TripDateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDatePayload>
          }
          update: {
            args: Prisma.TripDateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDatePayload>
          }
          deleteMany: {
            args: Prisma.TripDateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripDateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripDateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDatePayload>[]
          }
          upsert: {
            args: Prisma.TripDateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripDatePayload>
          }
          aggregate: {
            args: Prisma.TripDateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripDate>
          }
          groupBy: {
            args: Prisma.TripDateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripDateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripDateCountArgs<ExtArgs>
            result: $Utils.Optional<TripDateCountAggregateOutputType> | number
          }
        }
      }
      Itinerary: {
        payload: Prisma.$ItineraryPayload<ExtArgs>
        fields: Prisma.ItineraryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItineraryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItineraryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          findFirst: {
            args: Prisma.ItineraryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItineraryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          findMany: {
            args: Prisma.ItineraryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>[]
          }
          create: {
            args: Prisma.ItineraryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          createMany: {
            args: Prisma.ItineraryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItineraryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>[]
          }
          delete: {
            args: Prisma.ItineraryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          update: {
            args: Prisma.ItineraryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          deleteMany: {
            args: Prisma.ItineraryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItineraryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItineraryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>[]
          }
          upsert: {
            args: Prisma.ItineraryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          aggregate: {
            args: Prisma.ItineraryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItinerary>
          }
          groupBy: {
            args: Prisma.ItineraryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItineraryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItineraryCountArgs<ExtArgs>
            result: $Utils.Optional<ItineraryCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      VibeVideo: {
        payload: Prisma.$VibeVideoPayload<ExtArgs>
        fields: Prisma.VibeVideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VibeVideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeVideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VibeVideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeVideoPayload>
          }
          findFirst: {
            args: Prisma.VibeVideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeVideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VibeVideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeVideoPayload>
          }
          findMany: {
            args: Prisma.VibeVideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeVideoPayload>[]
          }
          create: {
            args: Prisma.VibeVideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeVideoPayload>
          }
          createMany: {
            args: Prisma.VibeVideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VibeVideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeVideoPayload>[]
          }
          delete: {
            args: Prisma.VibeVideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeVideoPayload>
          }
          update: {
            args: Prisma.VibeVideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeVideoPayload>
          }
          deleteMany: {
            args: Prisma.VibeVideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VibeVideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VibeVideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeVideoPayload>[]
          }
          upsert: {
            args: Prisma.VibeVideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeVideoPayload>
          }
          aggregate: {
            args: Prisma.VibeVideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVibeVideo>
          }
          groupBy: {
            args: Prisma.VibeVideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VibeVideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VibeVideoCountArgs<ExtArgs>
            result: $Utils.Optional<VibeVideoCountAggregateOutputType> | number
          }
        }
      }
      TripPricing: {
        payload: Prisma.$TripPricingPayload<ExtArgs>
        fields: Prisma.TripPricingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripPricingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPricingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripPricingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPricingPayload>
          }
          findFirst: {
            args: Prisma.TripPricingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPricingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripPricingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPricingPayload>
          }
          findMany: {
            args: Prisma.TripPricingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPricingPayload>[]
          }
          create: {
            args: Prisma.TripPricingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPricingPayload>
          }
          createMany: {
            args: Prisma.TripPricingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripPricingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPricingPayload>[]
          }
          delete: {
            args: Prisma.TripPricingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPricingPayload>
          }
          update: {
            args: Prisma.TripPricingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPricingPayload>
          }
          deleteMany: {
            args: Prisma.TripPricingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripPricingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripPricingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPricingPayload>[]
          }
          upsert: {
            args: Prisma.TripPricingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPricingPayload>
          }
          aggregate: {
            args: Prisma.TripPricingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripPricing>
          }
          groupBy: {
            args: Prisma.TripPricingGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripPricingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripPricingCountArgs<ExtArgs>
            result: $Utils.Optional<TripPricingCountAggregateOutputType> | number
          }
        }
      }
      Faq: {
        payload: Prisma.$FaqPayload<ExtArgs>
        fields: Prisma.FaqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaqFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaqFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          findFirst: {
            args: Prisma.FaqFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaqFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          findMany: {
            args: Prisma.FaqFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>[]
          }
          create: {
            args: Prisma.FaqCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          createMany: {
            args: Prisma.FaqCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FaqCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>[]
          }
          delete: {
            args: Prisma.FaqDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          update: {
            args: Prisma.FaqUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          deleteMany: {
            args: Prisma.FaqDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FaqUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FaqUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>[]
          }
          upsert: {
            args: Prisma.FaqUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          aggregate: {
            args: Prisma.FaqAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaq>
          }
          groupBy: {
            args: Prisma.FaqGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaqGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaqCountArgs<ExtArgs>
            result: $Utils.Optional<FaqCountAggregateOutputType> | number
          }
        }
      }
      BookingSession: {
        payload: Prisma.$BookingSessionPayload<ExtArgs>
        fields: Prisma.BookingSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSessionPayload>
          }
          findFirst: {
            args: Prisma.BookingSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSessionPayload>
          }
          findMany: {
            args: Prisma.BookingSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSessionPayload>[]
          }
          create: {
            args: Prisma.BookingSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSessionPayload>
          }
          createMany: {
            args: Prisma.BookingSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSessionPayload>[]
          }
          delete: {
            args: Prisma.BookingSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSessionPayload>
          }
          update: {
            args: Prisma.BookingSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSessionPayload>
          }
          deleteMany: {
            args: Prisma.BookingSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSessionPayload>[]
          }
          upsert: {
            args: Prisma.BookingSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSessionPayload>
          }
          aggregate: {
            args: Prisma.BookingSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingSession>
          }
          groupBy: {
            args: Prisma.BookingSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingSessionCountArgs<ExtArgs>
            result: $Utils.Optional<BookingSessionCountAggregateOutputType> | number
          }
        }
      }
      BookingItem: {
        payload: Prisma.$BookingItemPayload<ExtArgs>
        fields: Prisma.BookingItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>
          }
          findFirst: {
            args: Prisma.BookingItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>
          }
          findMany: {
            args: Prisma.BookingItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>[]
          }
          create: {
            args: Prisma.BookingItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>
          }
          createMany: {
            args: Prisma.BookingItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>[]
          }
          delete: {
            args: Prisma.BookingItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>
          }
          update: {
            args: Prisma.BookingItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>
          }
          deleteMany: {
            args: Prisma.BookingItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>[]
          }
          upsert: {
            args: Prisma.BookingItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>
          }
          aggregate: {
            args: Prisma.BookingItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingItem>
          }
          groupBy: {
            args: Prisma.BookingItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingItemCountArgs<ExtArgs>
            result: $Utils.Optional<BookingItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    booking?: BookingOmit
    review?: ReviewOmit
    tour?: TourOmit
    tourType?: TourTypeOmit
    trip?: TripOmit
    tripDate?: TripDateOmit
    itinerary?: ItineraryOmit
    category?: CategoryOmit
    vibeVideo?: VibeVideoOmit
    tripPricing?: TripPricingOmit
    faq?: FaqOmit
    bookingSession?: BookingSessionOmit
    bookingItem?: BookingItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookingSession: number
    bookings: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingSession?: boolean | UserCountOutputTypeCountBookingSessionArgs
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    items: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | BookingCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingItemWhereInput
  }


  /**
   * Count Type TourCountOutputType
   */

  export type TourCountOutputType = {
    reviews: number
    trips: number
    faq: number
  }

  export type TourCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | TourCountOutputTypeCountReviewsArgs
    trips?: boolean | TourCountOutputTypeCountTripsArgs
    faq?: boolean | TourCountOutputTypeCountFaqArgs
  }

  // Custom InputTypes
  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourCountOutputType
     */
    select?: TourCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountFaqArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaqWhereInput
  }


  /**
   * Count Type TourTypeCountOutputType
   */

  export type TourTypeCountOutputType = {
    tours: number
  }

  export type TourTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | TourTypeCountOutputTypeCountToursArgs
  }

  // Custom InputTypes
  /**
   * TourTypeCountOutputType without action
   */
  export type TourTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourTypeCountOutputType
     */
    select?: TourTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TourTypeCountOutputType without action
   */
  export type TourTypeCountOutputTypeCountToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    Itinerary: number
    TripDate: number
    bookingSession: number
    Booking: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Itinerary?: boolean | TripCountOutputTypeCountItineraryArgs
    TripDate?: boolean | TripCountOutputTypeCountTripDateArgs
    bookingSession?: boolean | TripCountOutputTypeCountBookingSessionArgs
    Booking?: boolean | TripCountOutputTypeCountBookingArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountItineraryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItineraryWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountTripDateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripDateWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountBookingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingSessionWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type TripDateCountOutputType
   */

  export type TripDateCountOutputType = {
    booking: number
    pricing: number
    bookingSession: number
  }

  export type TripDateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | TripDateCountOutputTypeCountBookingArgs
    pricing?: boolean | TripDateCountOutputTypeCountPricingArgs
    bookingSession?: boolean | TripDateCountOutputTypeCountBookingSessionArgs
  }

  // Custom InputTypes
  /**
   * TripDateCountOutputType without action
   */
  export type TripDateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDateCountOutputType
     */
    select?: TripDateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripDateCountOutputType without action
   */
  export type TripDateCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * TripDateCountOutputType without action
   */
  export type TripDateCountOutputTypeCountPricingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPricingWhereInput
  }

  /**
   * TripDateCountOutputType without action
   */
  export type TripDateCountOutputTypeCountBookingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingSessionWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    trip: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | CategoryCountOutputTypeCountTripArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    imageUrl: string | null
    password: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    imageUrl: string | null
    password: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    imageUrl: number
    password: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    imageUrl?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    imageUrl?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    imageUrl?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    phone: string | null
    imageUrl: string | null
    password: string | null
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    imageUrl?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookingSession?: boolean | User$bookingSessionArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    imageUrl?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    imageUrl?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    imageUrl?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "imageUrl" | "password" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingSession?: boolean | User$bookingSessionArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookingSession: Prisma.$BookingSessionPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      phone: string | null
      imageUrl: string | null
      password: string | null
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookingSession<T extends User$bookingSessionArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bookingSession
   */
  export type User$bookingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSession
     */
    select?: BookingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSession
     */
    omit?: BookingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSessionInclude<ExtArgs> | null
    where?: BookingSessionWhereInput
    orderBy?: BookingSessionOrderByWithRelationInput | BookingSessionOrderByWithRelationInput[]
    cursor?: BookingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingSessionScalarFieldEnum | BookingSessionScalarFieldEnum[]
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    tripId: number | null
    tripDateId: number | null
    totalAmount: number | null
    totalSeats: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    tripId: number | null
    tripDateId: number | null
    totalAmount: number | null
    totalSeats: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    userId: string | null
    tripId: number | null
    tripDateId: number | null
    mobileNumber: string | null
    status: $Enums.BookingStatus | null
    totalAmount: number | null
    totalSeats: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    tripId: number | null
    tripDateId: number | null
    mobileNumber: string | null
    status: $Enums.BookingStatus | null
    totalAmount: number | null
    totalSeats: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    tripId: number
    tripDateId: number
    mobileNumber: number
    status: number
    totalAmount: number
    totalSeats: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    tripId?: true
    tripDateId?: true
    totalAmount?: true
    totalSeats?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    tripId?: true
    tripDateId?: true
    totalAmount?: true
    totalSeats?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    tripDateId?: true
    mobileNumber?: true
    status?: true
    totalAmount?: true
    totalSeats?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    tripDateId?: true
    mobileNumber?: true
    status?: true
    totalAmount?: true
    totalSeats?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    tripDateId?: true
    mobileNumber?: true
    status?: true
    totalAmount?: true
    totalSeats?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    userId: string
    tripId: number
    tripDateId: number
    mobileNumber: string | null
    status: $Enums.BookingStatus
    totalAmount: number
    totalSeats: number
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    tripDateId?: boolean
    mobileNumber?: boolean
    status?: boolean
    totalAmount?: boolean
    totalSeats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
    items?: boolean | Booking$itemsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    tripDateId?: boolean
    mobileNumber?: boolean
    status?: boolean
    totalAmount?: boolean
    totalSeats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    tripDateId?: boolean
    mobileNumber?: boolean
    status?: boolean
    totalAmount?: boolean
    totalSeats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    tripId?: boolean
    tripDateId?: boolean
    mobileNumber?: boolean
    status?: boolean
    totalAmount?: boolean
    totalSeats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tripId" | "tripDateId" | "mobileNumber" | "status" | "totalAmount" | "totalSeats" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
    items?: boolean | Booking$itemsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trip: Prisma.$TripPayload<ExtArgs>
      tripDate: Prisma.$TripDatePayload<ExtArgs>
      items: Prisma.$BookingItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      tripId: number
      tripDateId: number
      mobileNumber: string | null
      status: $Enums.BookingStatus
      totalAmount: number
      totalSeats: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tripDate<T extends TripDateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDateDefaultArgs<ExtArgs>>): Prisma__TripDateClient<$Result.GetResult<Prisma.$TripDatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Booking$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly tripId: FieldRef<"Booking", 'Int'>
    readonly tripDateId: FieldRef<"Booking", 'Int'>
    readonly mobileNumber: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly totalAmount: FieldRef<"Booking", 'Int'>
    readonly totalSeats: FieldRef<"Booking", 'Int'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.items
   */
  export type Booking$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    where?: BookingItemWhereInput
    orderBy?: BookingItemOrderByWithRelationInput | BookingItemOrderByWithRelationInput[]
    cursor?: BookingItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingItemScalarFieldEnum | BookingItemScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    tourId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    tourId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: string | null
    tourId: number | null
    review: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: string | null
    tourId: number | null
    review: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    userId: number
    tourId: number
    review: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    tourId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    tourId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    tourId?: true
    review?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    tourId?: true
    review?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    tourId?: true
    review?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    rating: number
    userId: string
    tourId: number
    review: string
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    userId?: boolean
    tourId?: boolean
    review?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    userId?: boolean
    tourId?: boolean
    review?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    userId?: boolean
    tourId?: boolean
    review?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    userId?: boolean
    tourId?: boolean
    review?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "userId" | "tourId" | "review" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      userId: string
      tourId: number
      review: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly tourId: FieldRef<"Review", 'Int'>
    readonly review: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Tour
   */

  export type AggregateTour = {
    _count: TourCountAggregateOutputType | null
    _avg: TourAvgAggregateOutputType | null
    _sum: TourSumAggregateOutputType | null
    _min: TourMinAggregateOutputType | null
    _max: TourMaxAggregateOutputType | null
  }

  export type TourAvgAggregateOutputType = {
    id: number | null
    tourTypeId: number | null
  }

  export type TourSumAggregateOutputType = {
    id: number | null
    tourTypeId: number | null
  }

  export type TourMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    about: string | null
    thumbnailImageUrl: string | null
    thumbnailVideoUrl: string | null
    cardImageUrl: string | null
    tourTypeId: number | null
    isActive: boolean | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    about: string | null
    thumbnailImageUrl: string | null
    thumbnailVideoUrl: string | null
    cardImageUrl: string | null
    tourTypeId: number | null
    isActive: boolean | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    about: number
    thumbnailImageUrl: number
    thumbnailVideoUrl: number
    cardImageUrl: number
    tourTypeId: number
    isActive: number
    isFeatured: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TourAvgAggregateInputType = {
    id?: true
    tourTypeId?: true
  }

  export type TourSumAggregateInputType = {
    id?: true
    tourTypeId?: true
  }

  export type TourMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    about?: true
    thumbnailImageUrl?: true
    thumbnailVideoUrl?: true
    cardImageUrl?: true
    tourTypeId?: true
    isActive?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    about?: true
    thumbnailImageUrl?: true
    thumbnailVideoUrl?: true
    cardImageUrl?: true
    tourTypeId?: true
    isActive?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    about?: true
    thumbnailImageUrl?: true
    thumbnailVideoUrl?: true
    cardImageUrl?: true
    tourTypeId?: true
    isActive?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tour to aggregate.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tours
    **/
    _count?: true | TourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourMaxAggregateInputType
  }

  export type GetTourAggregateType<T extends TourAggregateArgs> = {
        [P in keyof T & keyof AggregateTour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTour[P]>
      : GetScalarType<T[P], AggregateTour[P]>
  }




  export type TourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourWhereInput
    orderBy?: TourOrderByWithAggregationInput | TourOrderByWithAggregationInput[]
    by: TourScalarFieldEnum[] | TourScalarFieldEnum
    having?: TourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourCountAggregateInputType | true
    _avg?: TourAvgAggregateInputType
    _sum?: TourSumAggregateInputType
    _min?: TourMinAggregateInputType
    _max?: TourMaxAggregateInputType
  }

  export type TourGroupByOutputType = {
    id: number
    title: string
    slug: string
    about: string
    thumbnailImageUrl: string
    thumbnailVideoUrl: string | null
    cardImageUrl: string
    tourTypeId: number
    isActive: boolean
    isFeatured: boolean
    createdAt: Date
    updatedAt: Date
    _count: TourCountAggregateOutputType | null
    _avg: TourAvgAggregateOutputType | null
    _sum: TourSumAggregateOutputType | null
    _min: TourMinAggregateOutputType | null
    _max: TourMaxAggregateOutputType | null
  }

  type GetTourGroupByPayload<T extends TourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourGroupByOutputType[P]>
            : GetScalarType<T[P], TourGroupByOutputType[P]>
        }
      >
    >


  export type TourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    about?: boolean
    thumbnailImageUrl?: boolean
    thumbnailVideoUrl?: boolean
    cardImageUrl?: boolean
    tourTypeId?: boolean
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviews?: boolean | Tour$reviewsArgs<ExtArgs>
    trips?: boolean | Tour$tripsArgs<ExtArgs>
    faq?: boolean | Tour$faqArgs<ExtArgs>
    tourType?: boolean | TourTypeDefaultArgs<ExtArgs>
    _count?: boolean | TourCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    about?: boolean
    thumbnailImageUrl?: boolean
    thumbnailVideoUrl?: boolean
    cardImageUrl?: boolean
    tourTypeId?: boolean
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tourType?: boolean | TourTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    about?: boolean
    thumbnailImageUrl?: boolean
    thumbnailVideoUrl?: boolean
    cardImageUrl?: boolean
    tourTypeId?: boolean
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tourType?: boolean | TourTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    about?: boolean
    thumbnailImageUrl?: boolean
    thumbnailVideoUrl?: boolean
    cardImageUrl?: boolean
    tourTypeId?: boolean
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TourOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "about" | "thumbnailImageUrl" | "thumbnailVideoUrl" | "cardImageUrl" | "tourTypeId" | "isActive" | "isFeatured" | "createdAt" | "updatedAt", ExtArgs["result"]["tour"]>
  export type TourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | Tour$reviewsArgs<ExtArgs>
    trips?: boolean | Tour$tripsArgs<ExtArgs>
    faq?: boolean | Tour$faqArgs<ExtArgs>
    tourType?: boolean | TourTypeDefaultArgs<ExtArgs>
    _count?: boolean | TourCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TourIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourType?: boolean | TourTypeDefaultArgs<ExtArgs>
  }
  export type TourIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourType?: boolean | TourTypeDefaultArgs<ExtArgs>
  }

  export type $TourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tour"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      trips: Prisma.$TripPayload<ExtArgs>[]
      faq: Prisma.$FaqPayload<ExtArgs>[]
      tourType: Prisma.$TourTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      about: string
      thumbnailImageUrl: string
      thumbnailVideoUrl: string | null
      cardImageUrl: string
      tourTypeId: number
      isActive: boolean
      isFeatured: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tour"]>
    composites: {}
  }

  type TourGetPayload<S extends boolean | null | undefined | TourDefaultArgs> = $Result.GetResult<Prisma.$TourPayload, S>

  type TourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourCountAggregateInputType | true
    }

  export interface TourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tour'], meta: { name: 'Tour' } }
    /**
     * Find zero or one Tour that matches the filter.
     * @param {TourFindUniqueArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourFindUniqueArgs>(args: SelectSubset<T, TourFindUniqueArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tour that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourFindUniqueOrThrowArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourFindUniqueOrThrowArgs>(args: SelectSubset<T, TourFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindFirstArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourFindFirstArgs>(args?: SelectSubset<T, TourFindFirstArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindFirstOrThrowArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourFindFirstOrThrowArgs>(args?: SelectSubset<T, TourFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tours
     * const tours = await prisma.tour.findMany()
     * 
     * // Get first 10 Tours
     * const tours = await prisma.tour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourWithIdOnly = await prisma.tour.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourFindManyArgs>(args?: SelectSubset<T, TourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tour.
     * @param {TourCreateArgs} args - Arguments to create a Tour.
     * @example
     * // Create one Tour
     * const Tour = await prisma.tour.create({
     *   data: {
     *     // ... data to create a Tour
     *   }
     * })
     * 
     */
    create<T extends TourCreateArgs>(args: SelectSubset<T, TourCreateArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tours.
     * @param {TourCreateManyArgs} args - Arguments to create many Tours.
     * @example
     * // Create many Tours
     * const tour = await prisma.tour.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourCreateManyArgs>(args?: SelectSubset<T, TourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tours and returns the data saved in the database.
     * @param {TourCreateManyAndReturnArgs} args - Arguments to create many Tours.
     * @example
     * // Create many Tours
     * const tour = await prisma.tour.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tours and only return the `id`
     * const tourWithIdOnly = await prisma.tour.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourCreateManyAndReturnArgs>(args?: SelectSubset<T, TourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tour.
     * @param {TourDeleteArgs} args - Arguments to delete one Tour.
     * @example
     * // Delete one Tour
     * const Tour = await prisma.tour.delete({
     *   where: {
     *     // ... filter to delete one Tour
     *   }
     * })
     * 
     */
    delete<T extends TourDeleteArgs>(args: SelectSubset<T, TourDeleteArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tour.
     * @param {TourUpdateArgs} args - Arguments to update one Tour.
     * @example
     * // Update one Tour
     * const tour = await prisma.tour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourUpdateArgs>(args: SelectSubset<T, TourUpdateArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tours.
     * @param {TourDeleteManyArgs} args - Arguments to filter Tours to delete.
     * @example
     * // Delete a few Tours
     * const { count } = await prisma.tour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourDeleteManyArgs>(args?: SelectSubset<T, TourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tours
     * const tour = await prisma.tour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourUpdateManyArgs>(args: SelectSubset<T, TourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tours and returns the data updated in the database.
     * @param {TourUpdateManyAndReturnArgs} args - Arguments to update many Tours.
     * @example
     * // Update many Tours
     * const tour = await prisma.tour.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tours and only return the `id`
     * const tourWithIdOnly = await prisma.tour.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourUpdateManyAndReturnArgs>(args: SelectSubset<T, TourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tour.
     * @param {TourUpsertArgs} args - Arguments to update or create a Tour.
     * @example
     * // Update or create a Tour
     * const tour = await prisma.tour.upsert({
     *   create: {
     *     // ... data to create a Tour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tour we want to update
     *   }
     * })
     */
    upsert<T extends TourUpsertArgs>(args: SelectSubset<T, TourUpsertArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourCountArgs} args - Arguments to filter Tours to count.
     * @example
     * // Count the number of Tours
     * const count = await prisma.tour.count({
     *   where: {
     *     // ... the filter for the Tours we want to count
     *   }
     * })
    **/
    count<T extends TourCountArgs>(
      args?: Subset<T, TourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TourAggregateArgs>(args: Subset<T, TourAggregateArgs>): Prisma.PrismaPromise<GetTourAggregateType<T>>

    /**
     * Group by Tour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourGroupByArgs['orderBy'] }
        : { orderBy?: TourGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tour model
   */
  readonly fields: TourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends Tour$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Tour$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trips<T extends Tour$tripsArgs<ExtArgs> = {}>(args?: Subset<T, Tour$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    faq<T extends Tour$faqArgs<ExtArgs> = {}>(args?: Subset<T, Tour$faqArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tourType<T extends TourTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourTypeDefaultArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tour model
   */
  interface TourFieldRefs {
    readonly id: FieldRef<"Tour", 'Int'>
    readonly title: FieldRef<"Tour", 'String'>
    readonly slug: FieldRef<"Tour", 'String'>
    readonly about: FieldRef<"Tour", 'String'>
    readonly thumbnailImageUrl: FieldRef<"Tour", 'String'>
    readonly thumbnailVideoUrl: FieldRef<"Tour", 'String'>
    readonly cardImageUrl: FieldRef<"Tour", 'String'>
    readonly tourTypeId: FieldRef<"Tour", 'Int'>
    readonly isActive: FieldRef<"Tour", 'Boolean'>
    readonly isFeatured: FieldRef<"Tour", 'Boolean'>
    readonly createdAt: FieldRef<"Tour", 'DateTime'>
    readonly updatedAt: FieldRef<"Tour", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tour findUnique
   */
  export type TourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour findUniqueOrThrow
   */
  export type TourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour findFirst
   */
  export type TourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours.
     */
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour findFirstOrThrow
   */
  export type TourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours.
     */
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour findMany
   */
  export type TourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tours to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour create
   */
  export type TourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The data needed to create a Tour.
     */
    data: XOR<TourCreateInput, TourUncheckedCreateInput>
  }

  /**
   * Tour createMany
   */
  export type TourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tours.
     */
    data: TourCreateManyInput | TourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tour createManyAndReturn
   */
  export type TourCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * The data used to create many Tours.
     */
    data: TourCreateManyInput | TourCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tour update
   */
  export type TourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The data needed to update a Tour.
     */
    data: XOR<TourUpdateInput, TourUncheckedUpdateInput>
    /**
     * Choose, which Tour to update.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour updateMany
   */
  export type TourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tours.
     */
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyInput>
    /**
     * Filter which Tours to update
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to update.
     */
    limit?: number
  }

  /**
   * Tour updateManyAndReturn
   */
  export type TourUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * The data used to update Tours.
     */
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyInput>
    /**
     * Filter which Tours to update
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tour upsert
   */
  export type TourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The filter to search for the Tour to update in case it exists.
     */
    where: TourWhereUniqueInput
    /**
     * In case the Tour found by the `where` argument doesn't exist, create a new Tour with this data.
     */
    create: XOR<TourCreateInput, TourUncheckedCreateInput>
    /**
     * In case the Tour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourUpdateInput, TourUncheckedUpdateInput>
  }

  /**
   * Tour delete
   */
  export type TourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter which Tour to delete.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour deleteMany
   */
  export type TourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tours to delete
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to delete.
     */
    limit?: number
  }

  /**
   * Tour.reviews
   */
  export type Tour$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Tour.trips
   */
  export type Tour$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Tour.faq
   */
  export type Tour$faqArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaqInclude<ExtArgs> | null
    where?: FaqWhereInput
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    cursor?: FaqWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Tour without action
   */
  export type TourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
  }


  /**
   * Model TourType
   */

  export type AggregateTourType = {
    _count: TourTypeCountAggregateOutputType | null
    _avg: TourTypeAvgAggregateOutputType | null
    _sum: TourTypeSumAggregateOutputType | null
    _min: TourTypeMinAggregateOutputType | null
    _max: TourTypeMaxAggregateOutputType | null
  }

  export type TourTypeAvgAggregateOutputType = {
    id: number | null
    priority: number | null
  }

  export type TourTypeSumAggregateOutputType = {
    id: number | null
    priority: number | null
  }

  export type TourTypeMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    slug: string | null
    description: string | null
    isActive: boolean | null
    priority: number | null
  }

  export type TourTypeMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    slug: string | null
    description: string | null
    isActive: boolean | null
    priority: number | null
  }

  export type TourTypeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    slug: number
    description: number
    isActive: number
    priority: number
    _all: number
  }


  export type TourTypeAvgAggregateInputType = {
    id?: true
    priority?: true
  }

  export type TourTypeSumAggregateInputType = {
    id?: true
    priority?: true
  }

  export type TourTypeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    slug?: true
    description?: true
    isActive?: true
    priority?: true
  }

  export type TourTypeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    slug?: true
    description?: true
    isActive?: true
    priority?: true
  }

  export type TourTypeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    slug?: true
    description?: true
    isActive?: true
    priority?: true
    _all?: true
  }

  export type TourTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourType to aggregate.
     */
    where?: TourTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourTypes to fetch.
     */
    orderBy?: TourTypeOrderByWithRelationInput | TourTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourTypes
    **/
    _count?: true | TourTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourTypeMaxAggregateInputType
  }

  export type GetTourTypeAggregateType<T extends TourTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTourType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourType[P]>
      : GetScalarType<T[P], AggregateTourType[P]>
  }




  export type TourTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourTypeWhereInput
    orderBy?: TourTypeOrderByWithAggregationInput | TourTypeOrderByWithAggregationInput[]
    by: TourTypeScalarFieldEnum[] | TourTypeScalarFieldEnum
    having?: TourTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourTypeCountAggregateInputType | true
    _avg?: TourTypeAvgAggregateInputType
    _sum?: TourTypeSumAggregateInputType
    _min?: TourTypeMinAggregateInputType
    _max?: TourTypeMaxAggregateInputType
  }

  export type TourTypeGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    slug: string
    description: string | null
    isActive: boolean
    priority: number
    _count: TourTypeCountAggregateOutputType | null
    _avg: TourTypeAvgAggregateOutputType | null
    _sum: TourTypeSumAggregateOutputType | null
    _min: TourTypeMinAggregateOutputType | null
    _max: TourTypeMaxAggregateOutputType | null
  }

  type GetTourTypeGroupByPayload<T extends TourTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TourTypeGroupByOutputType[P]>
        }
      >
    >


  export type TourTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    isActive?: boolean
    priority?: boolean
    tours?: boolean | TourType$toursArgs<ExtArgs>
    _count?: boolean | TourTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourType"]>

  export type TourTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    isActive?: boolean
    priority?: boolean
  }, ExtArgs["result"]["tourType"]>

  export type TourTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    isActive?: boolean
    priority?: boolean
  }, ExtArgs["result"]["tourType"]>

  export type TourTypeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    isActive?: boolean
    priority?: boolean
  }

  export type TourTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "slug" | "description" | "isActive" | "priority", ExtArgs["result"]["tourType"]>
  export type TourTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | TourType$toursArgs<ExtArgs>
    _count?: boolean | TourTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TourTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TourTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TourTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourType"
    objects: {
      tours: Prisma.$TourPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      title: string
      slug: string
      description: string | null
      isActive: boolean
      priority: number
    }, ExtArgs["result"]["tourType"]>
    composites: {}
  }

  type TourTypeGetPayload<S extends boolean | null | undefined | TourTypeDefaultArgs> = $Result.GetResult<Prisma.$TourTypePayload, S>

  type TourTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourTypeCountAggregateInputType | true
    }

  export interface TourTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourType'], meta: { name: 'TourType' } }
    /**
     * Find zero or one TourType that matches the filter.
     * @param {TourTypeFindUniqueArgs} args - Arguments to find a TourType
     * @example
     * // Get one TourType
     * const tourType = await prisma.tourType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourTypeFindUniqueArgs>(args: SelectSubset<T, TourTypeFindUniqueArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourTypeFindUniqueOrThrowArgs} args - Arguments to find a TourType
     * @example
     * // Get one TourType
     * const tourType = await prisma.tourType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TourTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeFindFirstArgs} args - Arguments to find a TourType
     * @example
     * // Get one TourType
     * const tourType = await prisma.tourType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourTypeFindFirstArgs>(args?: SelectSubset<T, TourTypeFindFirstArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeFindFirstOrThrowArgs} args - Arguments to find a TourType
     * @example
     * // Get one TourType
     * const tourType = await prisma.tourType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TourTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourTypes
     * const tourTypes = await prisma.tourType.findMany()
     * 
     * // Get first 10 TourTypes
     * const tourTypes = await prisma.tourType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourTypeWithIdOnly = await prisma.tourType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourTypeFindManyArgs>(args?: SelectSubset<T, TourTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourType.
     * @param {TourTypeCreateArgs} args - Arguments to create a TourType.
     * @example
     * // Create one TourType
     * const TourType = await prisma.tourType.create({
     *   data: {
     *     // ... data to create a TourType
     *   }
     * })
     * 
     */
    create<T extends TourTypeCreateArgs>(args: SelectSubset<T, TourTypeCreateArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourTypes.
     * @param {TourTypeCreateManyArgs} args - Arguments to create many TourTypes.
     * @example
     * // Create many TourTypes
     * const tourType = await prisma.tourType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourTypeCreateManyArgs>(args?: SelectSubset<T, TourTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourTypes and returns the data saved in the database.
     * @param {TourTypeCreateManyAndReturnArgs} args - Arguments to create many TourTypes.
     * @example
     * // Create many TourTypes
     * const tourType = await prisma.tourType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourTypes and only return the `id`
     * const tourTypeWithIdOnly = await prisma.tourType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TourTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourType.
     * @param {TourTypeDeleteArgs} args - Arguments to delete one TourType.
     * @example
     * // Delete one TourType
     * const TourType = await prisma.tourType.delete({
     *   where: {
     *     // ... filter to delete one TourType
     *   }
     * })
     * 
     */
    delete<T extends TourTypeDeleteArgs>(args: SelectSubset<T, TourTypeDeleteArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourType.
     * @param {TourTypeUpdateArgs} args - Arguments to update one TourType.
     * @example
     * // Update one TourType
     * const tourType = await prisma.tourType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourTypeUpdateArgs>(args: SelectSubset<T, TourTypeUpdateArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourTypes.
     * @param {TourTypeDeleteManyArgs} args - Arguments to filter TourTypes to delete.
     * @example
     * // Delete a few TourTypes
     * const { count } = await prisma.tourType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourTypeDeleteManyArgs>(args?: SelectSubset<T, TourTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourTypes
     * const tourType = await prisma.tourType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourTypeUpdateManyArgs>(args: SelectSubset<T, TourTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourTypes and returns the data updated in the database.
     * @param {TourTypeUpdateManyAndReturnArgs} args - Arguments to update many TourTypes.
     * @example
     * // Update many TourTypes
     * const tourType = await prisma.tourType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourTypes and only return the `id`
     * const tourTypeWithIdOnly = await prisma.tourType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TourTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourType.
     * @param {TourTypeUpsertArgs} args - Arguments to update or create a TourType.
     * @example
     * // Update or create a TourType
     * const tourType = await prisma.tourType.upsert({
     *   create: {
     *     // ... data to create a TourType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourType we want to update
     *   }
     * })
     */
    upsert<T extends TourTypeUpsertArgs>(args: SelectSubset<T, TourTypeUpsertArgs<ExtArgs>>): Prisma__TourTypeClient<$Result.GetResult<Prisma.$TourTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeCountArgs} args - Arguments to filter TourTypes to count.
     * @example
     * // Count the number of TourTypes
     * const count = await prisma.tourType.count({
     *   where: {
     *     // ... the filter for the TourTypes we want to count
     *   }
     * })
    **/
    count<T extends TourTypeCountArgs>(
      args?: Subset<T, TourTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TourTypeAggregateArgs>(args: Subset<T, TourTypeAggregateArgs>): Prisma.PrismaPromise<GetTourTypeAggregateType<T>>

    /**
     * Group by TourType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TourTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourTypeGroupByArgs['orderBy'] }
        : { orderBy?: TourTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TourTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourType model
   */
  readonly fields: TourTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tours<T extends TourType$toursArgs<ExtArgs> = {}>(args?: Subset<T, TourType$toursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TourType model
   */
  interface TourTypeFieldRefs {
    readonly id: FieldRef<"TourType", 'Int'>
    readonly createdAt: FieldRef<"TourType", 'DateTime'>
    readonly updatedAt: FieldRef<"TourType", 'DateTime'>
    readonly title: FieldRef<"TourType", 'String'>
    readonly slug: FieldRef<"TourType", 'String'>
    readonly description: FieldRef<"TourType", 'String'>
    readonly isActive: FieldRef<"TourType", 'Boolean'>
    readonly priority: FieldRef<"TourType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TourType findUnique
   */
  export type TourTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter, which TourType to fetch.
     */
    where: TourTypeWhereUniqueInput
  }

  /**
   * TourType findUniqueOrThrow
   */
  export type TourTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter, which TourType to fetch.
     */
    where: TourTypeWhereUniqueInput
  }

  /**
   * TourType findFirst
   */
  export type TourTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter, which TourType to fetch.
     */
    where?: TourTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourTypes to fetch.
     */
    orderBy?: TourTypeOrderByWithRelationInput | TourTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourTypes.
     */
    cursor?: TourTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourTypes.
     */
    distinct?: TourTypeScalarFieldEnum | TourTypeScalarFieldEnum[]
  }

  /**
   * TourType findFirstOrThrow
   */
  export type TourTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter, which TourType to fetch.
     */
    where?: TourTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourTypes to fetch.
     */
    orderBy?: TourTypeOrderByWithRelationInput | TourTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourTypes.
     */
    cursor?: TourTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourTypes.
     */
    distinct?: TourTypeScalarFieldEnum | TourTypeScalarFieldEnum[]
  }

  /**
   * TourType findMany
   */
  export type TourTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter, which TourTypes to fetch.
     */
    where?: TourTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourTypes to fetch.
     */
    orderBy?: TourTypeOrderByWithRelationInput | TourTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourTypes.
     */
    cursor?: TourTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourTypes.
     */
    skip?: number
    distinct?: TourTypeScalarFieldEnum | TourTypeScalarFieldEnum[]
  }

  /**
   * TourType create
   */
  export type TourTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TourType.
     */
    data: XOR<TourTypeCreateInput, TourTypeUncheckedCreateInput>
  }

  /**
   * TourType createMany
   */
  export type TourTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourTypes.
     */
    data: TourTypeCreateManyInput | TourTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourType createManyAndReturn
   */
  export type TourTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * The data used to create many TourTypes.
     */
    data: TourTypeCreateManyInput | TourTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourType update
   */
  export type TourTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TourType.
     */
    data: XOR<TourTypeUpdateInput, TourTypeUncheckedUpdateInput>
    /**
     * Choose, which TourType to update.
     */
    where: TourTypeWhereUniqueInput
  }

  /**
   * TourType updateMany
   */
  export type TourTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourTypes.
     */
    data: XOR<TourTypeUpdateManyMutationInput, TourTypeUncheckedUpdateManyInput>
    /**
     * Filter which TourTypes to update
     */
    where?: TourTypeWhereInput
    /**
     * Limit how many TourTypes to update.
     */
    limit?: number
  }

  /**
   * TourType updateManyAndReturn
   */
  export type TourTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * The data used to update TourTypes.
     */
    data: XOR<TourTypeUpdateManyMutationInput, TourTypeUncheckedUpdateManyInput>
    /**
     * Filter which TourTypes to update
     */
    where?: TourTypeWhereInput
    /**
     * Limit how many TourTypes to update.
     */
    limit?: number
  }

  /**
   * TourType upsert
   */
  export type TourTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TourType to update in case it exists.
     */
    where: TourTypeWhereUniqueInput
    /**
     * In case the TourType found by the `where` argument doesn't exist, create a new TourType with this data.
     */
    create: XOR<TourTypeCreateInput, TourTypeUncheckedCreateInput>
    /**
     * In case the TourType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourTypeUpdateInput, TourTypeUncheckedUpdateInput>
  }

  /**
   * TourType delete
   */
  export type TourTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
    /**
     * Filter which TourType to delete.
     */
    where: TourTypeWhereUniqueInput
  }

  /**
   * TourType deleteMany
   */
  export type TourTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourTypes to delete
     */
    where?: TourTypeWhereInput
    /**
     * Limit how many TourTypes to delete.
     */
    limit?: number
  }

  /**
   * TourType.tours
   */
  export type TourType$toursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    where?: TourWhereInput
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    cursor?: TourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * TourType without action
   */
  export type TourTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourType
     */
    select?: TourTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourType
     */
    omit?: TourTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourTypeInclude<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    tourId: number | null
    startingPrice: number | null
  }

  export type TripSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    tourId: number | null
    startingPrice: number | null
  }

  export type TripMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    tourId: number | null
    thumbnailImageUrl: string | null
    thumbnailVideoUrl: string | null
    cardImageUrl: string | null
    isFeature: boolean | null
    title: string | null
    slug: string | null
    inclusion: string | null
    exclusion: string | null
    notes: string | null
    startingPrice: number | null
    ItineraryLink: string | null
    ItineraryImageUrl: string | null
    About: string | null
  }

  export type TripMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    tourId: number | null
    thumbnailImageUrl: string | null
    thumbnailVideoUrl: string | null
    cardImageUrl: string | null
    isFeature: boolean | null
    title: string | null
    slug: string | null
    inclusion: string | null
    exclusion: string | null
    notes: string | null
    startingPrice: number | null
    ItineraryLink: string | null
    ItineraryImageUrl: string | null
    About: string | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    categoryId: number
    tourId: number
    thumbnailImageUrl: number
    thumbnailVideoUrl: number
    cardImageUrl: number
    isFeature: number
    title: number
    slug: number
    inclusion: number
    exclusion: number
    notes: number
    startingPrice: number
    ItineraryLink: number
    ItineraryImageUrl: number
    About: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    id?: true
    categoryId?: true
    tourId?: true
    startingPrice?: true
  }

  export type TripSumAggregateInputType = {
    id?: true
    categoryId?: true
    tourId?: true
    startingPrice?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    categoryId?: true
    tourId?: true
    thumbnailImageUrl?: true
    thumbnailVideoUrl?: true
    cardImageUrl?: true
    isFeature?: true
    title?: true
    slug?: true
    inclusion?: true
    exclusion?: true
    notes?: true
    startingPrice?: true
    ItineraryLink?: true
    ItineraryImageUrl?: true
    About?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    categoryId?: true
    tourId?: true
    thumbnailImageUrl?: true
    thumbnailVideoUrl?: true
    cardImageUrl?: true
    isFeature?: true
    title?: true
    slug?: true
    inclusion?: true
    exclusion?: true
    notes?: true
    startingPrice?: true
    ItineraryLink?: true
    ItineraryImageUrl?: true
    About?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    categoryId?: true
    tourId?: true
    thumbnailImageUrl?: true
    thumbnailVideoUrl?: true
    cardImageUrl?: true
    isFeature?: true
    title?: true
    slug?: true
    inclusion?: true
    exclusion?: true
    notes?: true
    startingPrice?: true
    ItineraryLink?: true
    ItineraryImageUrl?: true
    About?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: number
    categoryId: number
    tourId: number
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About: string
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    tourId?: boolean
    thumbnailImageUrl?: boolean
    thumbnailVideoUrl?: boolean
    cardImageUrl?: boolean
    isFeature?: boolean
    title?: boolean
    slug?: boolean
    inclusion?: boolean
    exclusion?: boolean
    notes?: boolean
    startingPrice?: boolean
    ItineraryLink?: boolean
    ItineraryImageUrl?: boolean
    About?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
    Itinerary?: boolean | Trip$ItineraryArgs<ExtArgs>
    TripDate?: boolean | Trip$TripDateArgs<ExtArgs>
    bookingSession?: boolean | Trip$bookingSessionArgs<ExtArgs>
    Booking?: boolean | Trip$BookingArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    tourId?: boolean
    thumbnailImageUrl?: boolean
    thumbnailVideoUrl?: boolean
    cardImageUrl?: boolean
    isFeature?: boolean
    title?: boolean
    slug?: boolean
    inclusion?: boolean
    exclusion?: boolean
    notes?: boolean
    startingPrice?: boolean
    ItineraryLink?: boolean
    ItineraryImageUrl?: boolean
    About?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    tourId?: boolean
    thumbnailImageUrl?: boolean
    thumbnailVideoUrl?: boolean
    cardImageUrl?: boolean
    isFeature?: boolean
    title?: boolean
    slug?: boolean
    inclusion?: boolean
    exclusion?: boolean
    notes?: boolean
    startingPrice?: boolean
    ItineraryLink?: boolean
    ItineraryImageUrl?: boolean
    About?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    categoryId?: boolean
    tourId?: boolean
    thumbnailImageUrl?: boolean
    thumbnailVideoUrl?: boolean
    cardImageUrl?: boolean
    isFeature?: boolean
    title?: boolean
    slug?: boolean
    inclusion?: boolean
    exclusion?: boolean
    notes?: boolean
    startingPrice?: boolean
    ItineraryLink?: boolean
    ItineraryImageUrl?: boolean
    About?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "tourId" | "thumbnailImageUrl" | "thumbnailVideoUrl" | "cardImageUrl" | "isFeature" | "title" | "slug" | "inclusion" | "exclusion" | "notes" | "startingPrice" | "ItineraryLink" | "ItineraryImageUrl" | "About", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
    Itinerary?: boolean | Trip$ItineraryArgs<ExtArgs>
    TripDate?: boolean | Trip$TripDateArgs<ExtArgs>
    bookingSession?: boolean | Trip$bookingSessionArgs<ExtArgs>
    Booking?: boolean | Trip$BookingArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TripIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      tour: Prisma.$TourPayload<ExtArgs>
      Itinerary: Prisma.$ItineraryPayload<ExtArgs>[]
      TripDate: Prisma.$TripDatePayload<ExtArgs>[]
      bookingSession: Prisma.$BookingSessionPayload<ExtArgs>[]
      Booking: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryId: number
      tourId: number
      thumbnailImageUrl: string
      thumbnailVideoUrl: string
      cardImageUrl: string
      isFeature: boolean
      title: string
      slug: string
      inclusion: string
      exclusion: string
      notes: string
      startingPrice: number
      ItineraryLink: string
      ItineraryImageUrl: string
      About: string
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {TripCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips and returns the data updated in the database.
     * @param {TripUpdateManyAndReturnArgs} args - Arguments to update many Trips.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripUpdateManyAndReturnArgs>(args: SelectSubset<T, TripUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Itinerary<T extends Trip$ItineraryArgs<ExtArgs> = {}>(args?: Subset<T, Trip$ItineraryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TripDate<T extends Trip$TripDateArgs<ExtArgs> = {}>(args?: Subset<T, Trip$TripDateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookingSession<T extends Trip$bookingSessionArgs<ExtArgs> = {}>(args?: Subset<T, Trip$bookingSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Booking<T extends Trip$BookingArgs<ExtArgs> = {}>(args?: Subset<T, Trip$BookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'Int'>
    readonly categoryId: FieldRef<"Trip", 'Int'>
    readonly tourId: FieldRef<"Trip", 'Int'>
    readonly thumbnailImageUrl: FieldRef<"Trip", 'String'>
    readonly thumbnailVideoUrl: FieldRef<"Trip", 'String'>
    readonly cardImageUrl: FieldRef<"Trip", 'String'>
    readonly isFeature: FieldRef<"Trip", 'Boolean'>
    readonly title: FieldRef<"Trip", 'String'>
    readonly slug: FieldRef<"Trip", 'String'>
    readonly inclusion: FieldRef<"Trip", 'String'>
    readonly exclusion: FieldRef<"Trip", 'String'>
    readonly notes: FieldRef<"Trip", 'String'>
    readonly startingPrice: FieldRef<"Trip", 'Int'>
    readonly ItineraryLink: FieldRef<"Trip", 'String'>
    readonly ItineraryImageUrl: FieldRef<"Trip", 'String'>
    readonly About: FieldRef<"Trip", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip createManyAndReturn
   */
  export type TripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip updateManyAndReturn
   */
  export type TripUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip.Itinerary
   */
  export type Trip$ItineraryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    where?: ItineraryWhereInput
    orderBy?: ItineraryOrderByWithRelationInput | ItineraryOrderByWithRelationInput[]
    cursor?: ItineraryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItineraryScalarFieldEnum | ItineraryScalarFieldEnum[]
  }

  /**
   * Trip.TripDate
   */
  export type Trip$TripDateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDate
     */
    select?: TripDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDate
     */
    omit?: TripDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDateInclude<ExtArgs> | null
    where?: TripDateWhereInput
    orderBy?: TripDateOrderByWithRelationInput | TripDateOrderByWithRelationInput[]
    cursor?: TripDateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripDateScalarFieldEnum | TripDateScalarFieldEnum[]
  }

  /**
   * Trip.bookingSession
   */
  export type Trip$bookingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSession
     */
    select?: BookingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSession
     */
    omit?: BookingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSessionInclude<ExtArgs> | null
    where?: BookingSessionWhereInput
    orderBy?: BookingSessionOrderByWithRelationInput | BookingSessionOrderByWithRelationInput[]
    cursor?: BookingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingSessionScalarFieldEnum | BookingSessionScalarFieldEnum[]
  }

  /**
   * Trip.Booking
   */
  export type Trip$BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model TripDate
   */

  export type AggregateTripDate = {
    _count: TripDateCountAggregateOutputType | null
    _avg: TripDateAvgAggregateOutputType | null
    _sum: TripDateSumAggregateOutputType | null
    _min: TripDateMinAggregateOutputType | null
    _max: TripDateMaxAggregateOutputType | null
  }

  export type TripDateAvgAggregateOutputType = {
    id: number | null
    tripId: number | null
  }

  export type TripDateSumAggregateOutputType = {
    id: number | null
    tripId: number | null
  }

  export type TripDateMinAggregateOutputType = {
    id: number | null
    tripId: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type TripDateMaxAggregateOutputType = {
    id: number | null
    tripId: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type TripDateCountAggregateOutputType = {
    id: number
    tripId: number
    startDate: number
    endDate: number
    createdAt: number
    _all: number
  }


  export type TripDateAvgAggregateInputType = {
    id?: true
    tripId?: true
  }

  export type TripDateSumAggregateInputType = {
    id?: true
    tripId?: true
  }

  export type TripDateMinAggregateInputType = {
    id?: true
    tripId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type TripDateMaxAggregateInputType = {
    id?: true
    tripId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type TripDateCountAggregateInputType = {
    id?: true
    tripId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    _all?: true
  }

  export type TripDateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripDate to aggregate.
     */
    where?: TripDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripDates to fetch.
     */
    orderBy?: TripDateOrderByWithRelationInput | TripDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripDates
    **/
    _count?: true | TripDateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripDateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripDateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripDateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripDateMaxAggregateInputType
  }

  export type GetTripDateAggregateType<T extends TripDateAggregateArgs> = {
        [P in keyof T & keyof AggregateTripDate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripDate[P]>
      : GetScalarType<T[P], AggregateTripDate[P]>
  }




  export type TripDateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripDateWhereInput
    orderBy?: TripDateOrderByWithAggregationInput | TripDateOrderByWithAggregationInput[]
    by: TripDateScalarFieldEnum[] | TripDateScalarFieldEnum
    having?: TripDateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripDateCountAggregateInputType | true
    _avg?: TripDateAvgAggregateInputType
    _sum?: TripDateSumAggregateInputType
    _min?: TripDateMinAggregateInputType
    _max?: TripDateMaxAggregateInputType
  }

  export type TripDateGroupByOutputType = {
    id: number
    tripId: number
    startDate: Date
    endDate: Date
    createdAt: Date
    _count: TripDateCountAggregateOutputType | null
    _avg: TripDateAvgAggregateOutputType | null
    _sum: TripDateSumAggregateOutputType | null
    _min: TripDateMinAggregateOutputType | null
    _max: TripDateMaxAggregateOutputType | null
  }

  type GetTripDateGroupByPayload<T extends TripDateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripDateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripDateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripDateGroupByOutputType[P]>
            : GetScalarType<T[P], TripDateGroupByOutputType[P]>
        }
      >
    >


  export type TripDateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    booking?: boolean | TripDate$bookingArgs<ExtArgs>
    pricing?: boolean | TripDate$pricingArgs<ExtArgs>
    bookingSession?: boolean | TripDate$bookingSessionArgs<ExtArgs>
    _count?: boolean | TripDateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripDate"]>

  export type TripDateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripDate"]>

  export type TripDateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripDate"]>

  export type TripDateSelectScalar = {
    id?: boolean
    tripId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
  }

  export type TripDateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "startDate" | "endDate" | "createdAt", ExtArgs["result"]["tripDate"]>
  export type TripDateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    booking?: boolean | TripDate$bookingArgs<ExtArgs>
    pricing?: boolean | TripDate$pricingArgs<ExtArgs>
    bookingSession?: boolean | TripDate$bookingSessionArgs<ExtArgs>
    _count?: boolean | TripDateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripDateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripDateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $TripDatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripDate"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs>[]
      pricing: Prisma.$TripPricingPayload<ExtArgs>[]
      bookingSession: Prisma.$BookingSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tripId: number
      startDate: Date
      endDate: Date
      createdAt: Date
    }, ExtArgs["result"]["tripDate"]>
    composites: {}
  }

  type TripDateGetPayload<S extends boolean | null | undefined | TripDateDefaultArgs> = $Result.GetResult<Prisma.$TripDatePayload, S>

  type TripDateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripDateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripDateCountAggregateInputType | true
    }

  export interface TripDateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripDate'], meta: { name: 'TripDate' } }
    /**
     * Find zero or one TripDate that matches the filter.
     * @param {TripDateFindUniqueArgs} args - Arguments to find a TripDate
     * @example
     * // Get one TripDate
     * const tripDate = await prisma.tripDate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripDateFindUniqueArgs>(args: SelectSubset<T, TripDateFindUniqueArgs<ExtArgs>>): Prisma__TripDateClient<$Result.GetResult<Prisma.$TripDatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripDate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripDateFindUniqueOrThrowArgs} args - Arguments to find a TripDate
     * @example
     * // Get one TripDate
     * const tripDate = await prisma.tripDate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripDateFindUniqueOrThrowArgs>(args: SelectSubset<T, TripDateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripDateClient<$Result.GetResult<Prisma.$TripDatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripDate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDateFindFirstArgs} args - Arguments to find a TripDate
     * @example
     * // Get one TripDate
     * const tripDate = await prisma.tripDate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripDateFindFirstArgs>(args?: SelectSubset<T, TripDateFindFirstArgs<ExtArgs>>): Prisma__TripDateClient<$Result.GetResult<Prisma.$TripDatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripDate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDateFindFirstOrThrowArgs} args - Arguments to find a TripDate
     * @example
     * // Get one TripDate
     * const tripDate = await prisma.tripDate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripDateFindFirstOrThrowArgs>(args?: SelectSubset<T, TripDateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripDateClient<$Result.GetResult<Prisma.$TripDatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripDates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripDates
     * const tripDates = await prisma.tripDate.findMany()
     * 
     * // Get first 10 TripDates
     * const tripDates = await prisma.tripDate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripDateWithIdOnly = await prisma.tripDate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripDateFindManyArgs>(args?: SelectSubset<T, TripDateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripDate.
     * @param {TripDateCreateArgs} args - Arguments to create a TripDate.
     * @example
     * // Create one TripDate
     * const TripDate = await prisma.tripDate.create({
     *   data: {
     *     // ... data to create a TripDate
     *   }
     * })
     * 
     */
    create<T extends TripDateCreateArgs>(args: SelectSubset<T, TripDateCreateArgs<ExtArgs>>): Prisma__TripDateClient<$Result.GetResult<Prisma.$TripDatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripDates.
     * @param {TripDateCreateManyArgs} args - Arguments to create many TripDates.
     * @example
     * // Create many TripDates
     * const tripDate = await prisma.tripDate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripDateCreateManyArgs>(args?: SelectSubset<T, TripDateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripDates and returns the data saved in the database.
     * @param {TripDateCreateManyAndReturnArgs} args - Arguments to create many TripDates.
     * @example
     * // Create many TripDates
     * const tripDate = await prisma.tripDate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripDates and only return the `id`
     * const tripDateWithIdOnly = await prisma.tripDate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripDateCreateManyAndReturnArgs>(args?: SelectSubset<T, TripDateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripDate.
     * @param {TripDateDeleteArgs} args - Arguments to delete one TripDate.
     * @example
     * // Delete one TripDate
     * const TripDate = await prisma.tripDate.delete({
     *   where: {
     *     // ... filter to delete one TripDate
     *   }
     * })
     * 
     */
    delete<T extends TripDateDeleteArgs>(args: SelectSubset<T, TripDateDeleteArgs<ExtArgs>>): Prisma__TripDateClient<$Result.GetResult<Prisma.$TripDatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripDate.
     * @param {TripDateUpdateArgs} args - Arguments to update one TripDate.
     * @example
     * // Update one TripDate
     * const tripDate = await prisma.tripDate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripDateUpdateArgs>(args: SelectSubset<T, TripDateUpdateArgs<ExtArgs>>): Prisma__TripDateClient<$Result.GetResult<Prisma.$TripDatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripDates.
     * @param {TripDateDeleteManyArgs} args - Arguments to filter TripDates to delete.
     * @example
     * // Delete a few TripDates
     * const { count } = await prisma.tripDate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDateDeleteManyArgs>(args?: SelectSubset<T, TripDateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripDates
     * const tripDate = await prisma.tripDate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripDateUpdateManyArgs>(args: SelectSubset<T, TripDateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripDates and returns the data updated in the database.
     * @param {TripDateUpdateManyAndReturnArgs} args - Arguments to update many TripDates.
     * @example
     * // Update many TripDates
     * const tripDate = await prisma.tripDate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripDates and only return the `id`
     * const tripDateWithIdOnly = await prisma.tripDate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripDateUpdateManyAndReturnArgs>(args: SelectSubset<T, TripDateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripDatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripDate.
     * @param {TripDateUpsertArgs} args - Arguments to update or create a TripDate.
     * @example
     * // Update or create a TripDate
     * const tripDate = await prisma.tripDate.upsert({
     *   create: {
     *     // ... data to create a TripDate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripDate we want to update
     *   }
     * })
     */
    upsert<T extends TripDateUpsertArgs>(args: SelectSubset<T, TripDateUpsertArgs<ExtArgs>>): Prisma__TripDateClient<$Result.GetResult<Prisma.$TripDatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDateCountArgs} args - Arguments to filter TripDates to count.
     * @example
     * // Count the number of TripDates
     * const count = await prisma.tripDate.count({
     *   where: {
     *     // ... the filter for the TripDates we want to count
     *   }
     * })
    **/
    count<T extends TripDateCountArgs>(
      args?: Subset<T, TripDateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripDateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripDateAggregateArgs>(args: Subset<T, TripDateAggregateArgs>): Prisma.PrismaPromise<GetTripDateAggregateType<T>>

    /**
     * Group by TripDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripDateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripDateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripDateGroupByArgs['orderBy'] }
        : { orderBy?: TripDateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripDateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripDateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripDate model
   */
  readonly fields: TripDateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripDate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripDateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends TripDate$bookingArgs<ExtArgs> = {}>(args?: Subset<T, TripDate$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pricing<T extends TripDate$pricingArgs<ExtArgs> = {}>(args?: Subset<T, TripDate$pricingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPricingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookingSession<T extends TripDate$bookingSessionArgs<ExtArgs> = {}>(args?: Subset<T, TripDate$bookingSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TripDate model
   */
  interface TripDateFieldRefs {
    readonly id: FieldRef<"TripDate", 'Int'>
    readonly tripId: FieldRef<"TripDate", 'Int'>
    readonly startDate: FieldRef<"TripDate", 'DateTime'>
    readonly endDate: FieldRef<"TripDate", 'DateTime'>
    readonly createdAt: FieldRef<"TripDate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TripDate findUnique
   */
  export type TripDateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDate
     */
    select?: TripDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDate
     */
    omit?: TripDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDateInclude<ExtArgs> | null
    /**
     * Filter, which TripDate to fetch.
     */
    where: TripDateWhereUniqueInput
  }

  /**
   * TripDate findUniqueOrThrow
   */
  export type TripDateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDate
     */
    select?: TripDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDate
     */
    omit?: TripDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDateInclude<ExtArgs> | null
    /**
     * Filter, which TripDate to fetch.
     */
    where: TripDateWhereUniqueInput
  }

  /**
   * TripDate findFirst
   */
  export type TripDateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDate
     */
    select?: TripDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDate
     */
    omit?: TripDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDateInclude<ExtArgs> | null
    /**
     * Filter, which TripDate to fetch.
     */
    where?: TripDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripDates to fetch.
     */
    orderBy?: TripDateOrderByWithRelationInput | TripDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripDates.
     */
    cursor?: TripDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripDates.
     */
    distinct?: TripDateScalarFieldEnum | TripDateScalarFieldEnum[]
  }

  /**
   * TripDate findFirstOrThrow
   */
  export type TripDateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDate
     */
    select?: TripDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDate
     */
    omit?: TripDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDateInclude<ExtArgs> | null
    /**
     * Filter, which TripDate to fetch.
     */
    where?: TripDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripDates to fetch.
     */
    orderBy?: TripDateOrderByWithRelationInput | TripDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripDates.
     */
    cursor?: TripDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripDates.
     */
    distinct?: TripDateScalarFieldEnum | TripDateScalarFieldEnum[]
  }

  /**
   * TripDate findMany
   */
  export type TripDateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDate
     */
    select?: TripDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDate
     */
    omit?: TripDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDateInclude<ExtArgs> | null
    /**
     * Filter, which TripDates to fetch.
     */
    where?: TripDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripDates to fetch.
     */
    orderBy?: TripDateOrderByWithRelationInput | TripDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripDates.
     */
    cursor?: TripDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripDates.
     */
    skip?: number
    distinct?: TripDateScalarFieldEnum | TripDateScalarFieldEnum[]
  }

  /**
   * TripDate create
   */
  export type TripDateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDate
     */
    select?: TripDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDate
     */
    omit?: TripDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDateInclude<ExtArgs> | null
    /**
     * The data needed to create a TripDate.
     */
    data: XOR<TripDateCreateInput, TripDateUncheckedCreateInput>
  }

  /**
   * TripDate createMany
   */
  export type TripDateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripDates.
     */
    data: TripDateCreateManyInput | TripDateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripDate createManyAndReturn
   */
  export type TripDateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDate
     */
    select?: TripDateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripDate
     */
    omit?: TripDateOmit<ExtArgs> | null
    /**
     * The data used to create many TripDates.
     */
    data: TripDateCreateManyInput | TripDateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripDate update
   */
  export type TripDateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDate
     */
    select?: TripDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDate
     */
    omit?: TripDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDateInclude<ExtArgs> | null
    /**
     * The data needed to update a TripDate.
     */
    data: XOR<TripDateUpdateInput, TripDateUncheckedUpdateInput>
    /**
     * Choose, which TripDate to update.
     */
    where: TripDateWhereUniqueInput
  }

  /**
   * TripDate updateMany
   */
  export type TripDateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripDates.
     */
    data: XOR<TripDateUpdateManyMutationInput, TripDateUncheckedUpdateManyInput>
    /**
     * Filter which TripDates to update
     */
    where?: TripDateWhereInput
    /**
     * Limit how many TripDates to update.
     */
    limit?: number
  }

  /**
   * TripDate updateManyAndReturn
   */
  export type TripDateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDate
     */
    select?: TripDateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripDate
     */
    omit?: TripDateOmit<ExtArgs> | null
    /**
     * The data used to update TripDates.
     */
    data: XOR<TripDateUpdateManyMutationInput, TripDateUncheckedUpdateManyInput>
    /**
     * Filter which TripDates to update
     */
    where?: TripDateWhereInput
    /**
     * Limit how many TripDates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripDate upsert
   */
  export type TripDateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDate
     */
    select?: TripDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDate
     */
    omit?: TripDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDateInclude<ExtArgs> | null
    /**
     * The filter to search for the TripDate to update in case it exists.
     */
    where: TripDateWhereUniqueInput
    /**
     * In case the TripDate found by the `where` argument doesn't exist, create a new TripDate with this data.
     */
    create: XOR<TripDateCreateInput, TripDateUncheckedCreateInput>
    /**
     * In case the TripDate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripDateUpdateInput, TripDateUncheckedUpdateInput>
  }

  /**
   * TripDate delete
   */
  export type TripDateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDate
     */
    select?: TripDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDate
     */
    omit?: TripDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDateInclude<ExtArgs> | null
    /**
     * Filter which TripDate to delete.
     */
    where: TripDateWhereUniqueInput
  }

  /**
   * TripDate deleteMany
   */
  export type TripDateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripDates to delete
     */
    where?: TripDateWhereInput
    /**
     * Limit how many TripDates to delete.
     */
    limit?: number
  }

  /**
   * TripDate.booking
   */
  export type TripDate$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * TripDate.pricing
   */
  export type TripDate$pricingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPricing
     */
    select?: TripPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPricing
     */
    omit?: TripPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPricingInclude<ExtArgs> | null
    where?: TripPricingWhereInput
    orderBy?: TripPricingOrderByWithRelationInput | TripPricingOrderByWithRelationInput[]
    cursor?: TripPricingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripPricingScalarFieldEnum | TripPricingScalarFieldEnum[]
  }

  /**
   * TripDate.bookingSession
   */
  export type TripDate$bookingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSession
     */
    select?: BookingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSession
     */
    omit?: BookingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSessionInclude<ExtArgs> | null
    where?: BookingSessionWhereInput
    orderBy?: BookingSessionOrderByWithRelationInput | BookingSessionOrderByWithRelationInput[]
    cursor?: BookingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingSessionScalarFieldEnum | BookingSessionScalarFieldEnum[]
  }

  /**
   * TripDate without action
   */
  export type TripDateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripDate
     */
    select?: TripDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripDate
     */
    omit?: TripDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripDateInclude<ExtArgs> | null
  }


  /**
   * Model Itinerary
   */

  export type AggregateItinerary = {
    _count: ItineraryCountAggregateOutputType | null
    _avg: ItineraryAvgAggregateOutputType | null
    _sum: ItinerarySumAggregateOutputType | null
    _min: ItineraryMinAggregateOutputType | null
    _max: ItineraryMaxAggregateOutputType | null
  }

  export type ItineraryAvgAggregateOutputType = {
    id: number | null
    tripId: number | null
    dayNumber: number | null
  }

  export type ItinerarySumAggregateOutputType = {
    id: number | null
    tripId: number | null
    dayNumber: number | null
  }

  export type ItineraryMinAggregateOutputType = {
    id: number | null
    tripId: number | null
    title: string | null
    description: string | null
    dayNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItineraryMaxAggregateOutputType = {
    id: number | null
    tripId: number | null
    title: string | null
    description: string | null
    dayNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItineraryCountAggregateOutputType = {
    id: number
    tripId: number
    title: number
    description: number
    dayNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItineraryAvgAggregateInputType = {
    id?: true
    tripId?: true
    dayNumber?: true
  }

  export type ItinerarySumAggregateInputType = {
    id?: true
    tripId?: true
    dayNumber?: true
  }

  export type ItineraryMinAggregateInputType = {
    id?: true
    tripId?: true
    title?: true
    description?: true
    dayNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItineraryMaxAggregateInputType = {
    id?: true
    tripId?: true
    title?: true
    description?: true
    dayNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItineraryCountAggregateInputType = {
    id?: true
    tripId?: true
    title?: true
    description?: true
    dayNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItineraryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Itinerary to aggregate.
     */
    where?: ItineraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Itineraries to fetch.
     */
    orderBy?: ItineraryOrderByWithRelationInput | ItineraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItineraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Itineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Itineraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Itineraries
    **/
    _count?: true | ItineraryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItineraryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItinerarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItineraryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItineraryMaxAggregateInputType
  }

  export type GetItineraryAggregateType<T extends ItineraryAggregateArgs> = {
        [P in keyof T & keyof AggregateItinerary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItinerary[P]>
      : GetScalarType<T[P], AggregateItinerary[P]>
  }




  export type ItineraryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItineraryWhereInput
    orderBy?: ItineraryOrderByWithAggregationInput | ItineraryOrderByWithAggregationInput[]
    by: ItineraryScalarFieldEnum[] | ItineraryScalarFieldEnum
    having?: ItineraryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItineraryCountAggregateInputType | true
    _avg?: ItineraryAvgAggregateInputType
    _sum?: ItinerarySumAggregateInputType
    _min?: ItineraryMinAggregateInputType
    _max?: ItineraryMaxAggregateInputType
  }

  export type ItineraryGroupByOutputType = {
    id: number
    tripId: number
    title: string
    description: string
    dayNumber: number
    createdAt: Date
    updatedAt: Date
    _count: ItineraryCountAggregateOutputType | null
    _avg: ItineraryAvgAggregateOutputType | null
    _sum: ItinerarySumAggregateOutputType | null
    _min: ItineraryMinAggregateOutputType | null
    _max: ItineraryMaxAggregateOutputType | null
  }

  type GetItineraryGroupByPayload<T extends ItineraryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItineraryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItineraryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItineraryGroupByOutputType[P]>
            : GetScalarType<T[P], ItineraryGroupByOutputType[P]>
        }
      >
    >


  export type ItinerarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    title?: boolean
    description?: boolean
    dayNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itinerary"]>

  export type ItinerarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    title?: boolean
    description?: boolean
    dayNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itinerary"]>

  export type ItinerarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    title?: boolean
    description?: boolean
    dayNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itinerary"]>

  export type ItinerarySelectScalar = {
    id?: boolean
    tripId?: boolean
    title?: boolean
    description?: boolean
    dayNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItineraryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "title" | "description" | "dayNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["itinerary"]>
  export type ItineraryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type ItineraryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type ItineraryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $ItineraryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Itinerary"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tripId: number
      title: string
      description: string
      dayNumber: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["itinerary"]>
    composites: {}
  }

  type ItineraryGetPayload<S extends boolean | null | undefined | ItineraryDefaultArgs> = $Result.GetResult<Prisma.$ItineraryPayload, S>

  type ItineraryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItineraryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItineraryCountAggregateInputType | true
    }

  export interface ItineraryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Itinerary'], meta: { name: 'Itinerary' } }
    /**
     * Find zero or one Itinerary that matches the filter.
     * @param {ItineraryFindUniqueArgs} args - Arguments to find a Itinerary
     * @example
     * // Get one Itinerary
     * const itinerary = await prisma.itinerary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItineraryFindUniqueArgs>(args: SelectSubset<T, ItineraryFindUniqueArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Itinerary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItineraryFindUniqueOrThrowArgs} args - Arguments to find a Itinerary
     * @example
     * // Get one Itinerary
     * const itinerary = await prisma.itinerary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItineraryFindUniqueOrThrowArgs>(args: SelectSubset<T, ItineraryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Itinerary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryFindFirstArgs} args - Arguments to find a Itinerary
     * @example
     * // Get one Itinerary
     * const itinerary = await prisma.itinerary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItineraryFindFirstArgs>(args?: SelectSubset<T, ItineraryFindFirstArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Itinerary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryFindFirstOrThrowArgs} args - Arguments to find a Itinerary
     * @example
     * // Get one Itinerary
     * const itinerary = await prisma.itinerary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItineraryFindFirstOrThrowArgs>(args?: SelectSubset<T, ItineraryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Itineraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Itineraries
     * const itineraries = await prisma.itinerary.findMany()
     * 
     * // Get first 10 Itineraries
     * const itineraries = await prisma.itinerary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itineraryWithIdOnly = await prisma.itinerary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItineraryFindManyArgs>(args?: SelectSubset<T, ItineraryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Itinerary.
     * @param {ItineraryCreateArgs} args - Arguments to create a Itinerary.
     * @example
     * // Create one Itinerary
     * const Itinerary = await prisma.itinerary.create({
     *   data: {
     *     // ... data to create a Itinerary
     *   }
     * })
     * 
     */
    create<T extends ItineraryCreateArgs>(args: SelectSubset<T, ItineraryCreateArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Itineraries.
     * @param {ItineraryCreateManyArgs} args - Arguments to create many Itineraries.
     * @example
     * // Create many Itineraries
     * const itinerary = await prisma.itinerary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItineraryCreateManyArgs>(args?: SelectSubset<T, ItineraryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Itineraries and returns the data saved in the database.
     * @param {ItineraryCreateManyAndReturnArgs} args - Arguments to create many Itineraries.
     * @example
     * // Create many Itineraries
     * const itinerary = await prisma.itinerary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Itineraries and only return the `id`
     * const itineraryWithIdOnly = await prisma.itinerary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItineraryCreateManyAndReturnArgs>(args?: SelectSubset<T, ItineraryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Itinerary.
     * @param {ItineraryDeleteArgs} args - Arguments to delete one Itinerary.
     * @example
     * // Delete one Itinerary
     * const Itinerary = await prisma.itinerary.delete({
     *   where: {
     *     // ... filter to delete one Itinerary
     *   }
     * })
     * 
     */
    delete<T extends ItineraryDeleteArgs>(args: SelectSubset<T, ItineraryDeleteArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Itinerary.
     * @param {ItineraryUpdateArgs} args - Arguments to update one Itinerary.
     * @example
     * // Update one Itinerary
     * const itinerary = await prisma.itinerary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItineraryUpdateArgs>(args: SelectSubset<T, ItineraryUpdateArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Itineraries.
     * @param {ItineraryDeleteManyArgs} args - Arguments to filter Itineraries to delete.
     * @example
     * // Delete a few Itineraries
     * const { count } = await prisma.itinerary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItineraryDeleteManyArgs>(args?: SelectSubset<T, ItineraryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Itineraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Itineraries
     * const itinerary = await prisma.itinerary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItineraryUpdateManyArgs>(args: SelectSubset<T, ItineraryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Itineraries and returns the data updated in the database.
     * @param {ItineraryUpdateManyAndReturnArgs} args - Arguments to update many Itineraries.
     * @example
     * // Update many Itineraries
     * const itinerary = await prisma.itinerary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Itineraries and only return the `id`
     * const itineraryWithIdOnly = await prisma.itinerary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItineraryUpdateManyAndReturnArgs>(args: SelectSubset<T, ItineraryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Itinerary.
     * @param {ItineraryUpsertArgs} args - Arguments to update or create a Itinerary.
     * @example
     * // Update or create a Itinerary
     * const itinerary = await prisma.itinerary.upsert({
     *   create: {
     *     // ... data to create a Itinerary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Itinerary we want to update
     *   }
     * })
     */
    upsert<T extends ItineraryUpsertArgs>(args: SelectSubset<T, ItineraryUpsertArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Itineraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryCountArgs} args - Arguments to filter Itineraries to count.
     * @example
     * // Count the number of Itineraries
     * const count = await prisma.itinerary.count({
     *   where: {
     *     // ... the filter for the Itineraries we want to count
     *   }
     * })
    **/
    count<T extends ItineraryCountArgs>(
      args?: Subset<T, ItineraryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItineraryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Itinerary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItineraryAggregateArgs>(args: Subset<T, ItineraryAggregateArgs>): Prisma.PrismaPromise<GetItineraryAggregateType<T>>

    /**
     * Group by Itinerary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItineraryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItineraryGroupByArgs['orderBy'] }
        : { orderBy?: ItineraryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItineraryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItineraryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Itinerary model
   */
  readonly fields: ItineraryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Itinerary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItineraryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Itinerary model
   */
  interface ItineraryFieldRefs {
    readonly id: FieldRef<"Itinerary", 'Int'>
    readonly tripId: FieldRef<"Itinerary", 'Int'>
    readonly title: FieldRef<"Itinerary", 'String'>
    readonly description: FieldRef<"Itinerary", 'String'>
    readonly dayNumber: FieldRef<"Itinerary", 'Int'>
    readonly createdAt: FieldRef<"Itinerary", 'DateTime'>
    readonly updatedAt: FieldRef<"Itinerary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Itinerary findUnique
   */
  export type ItineraryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter, which Itinerary to fetch.
     */
    where: ItineraryWhereUniqueInput
  }

  /**
   * Itinerary findUniqueOrThrow
   */
  export type ItineraryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter, which Itinerary to fetch.
     */
    where: ItineraryWhereUniqueInput
  }

  /**
   * Itinerary findFirst
   */
  export type ItineraryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter, which Itinerary to fetch.
     */
    where?: ItineraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Itineraries to fetch.
     */
    orderBy?: ItineraryOrderByWithRelationInput | ItineraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Itineraries.
     */
    cursor?: ItineraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Itineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Itineraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Itineraries.
     */
    distinct?: ItineraryScalarFieldEnum | ItineraryScalarFieldEnum[]
  }

  /**
   * Itinerary findFirstOrThrow
   */
  export type ItineraryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter, which Itinerary to fetch.
     */
    where?: ItineraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Itineraries to fetch.
     */
    orderBy?: ItineraryOrderByWithRelationInput | ItineraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Itineraries.
     */
    cursor?: ItineraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Itineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Itineraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Itineraries.
     */
    distinct?: ItineraryScalarFieldEnum | ItineraryScalarFieldEnum[]
  }

  /**
   * Itinerary findMany
   */
  export type ItineraryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter, which Itineraries to fetch.
     */
    where?: ItineraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Itineraries to fetch.
     */
    orderBy?: ItineraryOrderByWithRelationInput | ItineraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Itineraries.
     */
    cursor?: ItineraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Itineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Itineraries.
     */
    skip?: number
    distinct?: ItineraryScalarFieldEnum | ItineraryScalarFieldEnum[]
  }

  /**
   * Itinerary create
   */
  export type ItineraryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * The data needed to create a Itinerary.
     */
    data: XOR<ItineraryCreateInput, ItineraryUncheckedCreateInput>
  }

  /**
   * Itinerary createMany
   */
  export type ItineraryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Itineraries.
     */
    data: ItineraryCreateManyInput | ItineraryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Itinerary createManyAndReturn
   */
  export type ItineraryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * The data used to create many Itineraries.
     */
    data: ItineraryCreateManyInput | ItineraryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Itinerary update
   */
  export type ItineraryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * The data needed to update a Itinerary.
     */
    data: XOR<ItineraryUpdateInput, ItineraryUncheckedUpdateInput>
    /**
     * Choose, which Itinerary to update.
     */
    where: ItineraryWhereUniqueInput
  }

  /**
   * Itinerary updateMany
   */
  export type ItineraryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Itineraries.
     */
    data: XOR<ItineraryUpdateManyMutationInput, ItineraryUncheckedUpdateManyInput>
    /**
     * Filter which Itineraries to update
     */
    where?: ItineraryWhereInput
    /**
     * Limit how many Itineraries to update.
     */
    limit?: number
  }

  /**
   * Itinerary updateManyAndReturn
   */
  export type ItineraryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * The data used to update Itineraries.
     */
    data: XOR<ItineraryUpdateManyMutationInput, ItineraryUncheckedUpdateManyInput>
    /**
     * Filter which Itineraries to update
     */
    where?: ItineraryWhereInput
    /**
     * Limit how many Itineraries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Itinerary upsert
   */
  export type ItineraryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * The filter to search for the Itinerary to update in case it exists.
     */
    where: ItineraryWhereUniqueInput
    /**
     * In case the Itinerary found by the `where` argument doesn't exist, create a new Itinerary with this data.
     */
    create: XOR<ItineraryCreateInput, ItineraryUncheckedCreateInput>
    /**
     * In case the Itinerary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItineraryUpdateInput, ItineraryUncheckedUpdateInput>
  }

  /**
   * Itinerary delete
   */
  export type ItineraryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter which Itinerary to delete.
     */
    where: ItineraryWhereUniqueInput
  }

  /**
   * Itinerary deleteMany
   */
  export type ItineraryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Itineraries to delete
     */
    where?: ItineraryWhereInput
    /**
     * Limit how many Itineraries to delete.
     */
    limit?: number
  }

  /**
   * Itinerary without action
   */
  export type ItineraryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    slug: string
    title: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    trip?: boolean | Category$tripArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | Category$tripArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      title: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends Category$tripArgs<ExtArgs> = {}>(args?: Subset<T, Category$tripArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly title: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.trip
   */
  export type Category$tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model VibeVideo
   */

  export type AggregateVibeVideo = {
    _count: VibeVideoCountAggregateOutputType | null
    _avg: VibeVideoAvgAggregateOutputType | null
    _sum: VibeVideoSumAggregateOutputType | null
    _min: VibeVideoMinAggregateOutputType | null
    _max: VibeVideoMaxAggregateOutputType | null
  }

  export type VibeVideoAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type VibeVideoSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type VibeVideoMinAggregateOutputType = {
    id: number | null
    url: string | null
    title: string | null
    order: number | null
  }

  export type VibeVideoMaxAggregateOutputType = {
    id: number | null
    url: string | null
    title: string | null
    order: number | null
  }

  export type VibeVideoCountAggregateOutputType = {
    id: number
    url: number
    title: number
    order: number
    _all: number
  }


  export type VibeVideoAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type VibeVideoSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type VibeVideoMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    order?: true
  }

  export type VibeVideoMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    order?: true
  }

  export type VibeVideoCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    order?: true
    _all?: true
  }

  export type VibeVideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VibeVideo to aggregate.
     */
    where?: VibeVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VibeVideos to fetch.
     */
    orderBy?: VibeVideoOrderByWithRelationInput | VibeVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VibeVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VibeVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VibeVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VibeVideos
    **/
    _count?: true | VibeVideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VibeVideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VibeVideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VibeVideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VibeVideoMaxAggregateInputType
  }

  export type GetVibeVideoAggregateType<T extends VibeVideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVibeVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVibeVideo[P]>
      : GetScalarType<T[P], AggregateVibeVideo[P]>
  }




  export type VibeVideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VibeVideoWhereInput
    orderBy?: VibeVideoOrderByWithAggregationInput | VibeVideoOrderByWithAggregationInput[]
    by: VibeVideoScalarFieldEnum[] | VibeVideoScalarFieldEnum
    having?: VibeVideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VibeVideoCountAggregateInputType | true
    _avg?: VibeVideoAvgAggregateInputType
    _sum?: VibeVideoSumAggregateInputType
    _min?: VibeVideoMinAggregateInputType
    _max?: VibeVideoMaxAggregateInputType
  }

  export type VibeVideoGroupByOutputType = {
    id: number
    url: string
    title: string | null
    order: number | null
    _count: VibeVideoCountAggregateOutputType | null
    _avg: VibeVideoAvgAggregateOutputType | null
    _sum: VibeVideoSumAggregateOutputType | null
    _min: VibeVideoMinAggregateOutputType | null
    _max: VibeVideoMaxAggregateOutputType | null
  }

  type GetVibeVideoGroupByPayload<T extends VibeVideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VibeVideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VibeVideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VibeVideoGroupByOutputType[P]>
            : GetScalarType<T[P], VibeVideoGroupByOutputType[P]>
        }
      >
    >


  export type VibeVideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    order?: boolean
  }, ExtArgs["result"]["vibeVideo"]>

  export type VibeVideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    order?: boolean
  }, ExtArgs["result"]["vibeVideo"]>

  export type VibeVideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    order?: boolean
  }, ExtArgs["result"]["vibeVideo"]>

  export type VibeVideoSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    order?: boolean
  }

  export type VibeVideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "title" | "order", ExtArgs["result"]["vibeVideo"]>

  export type $VibeVideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VibeVideo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      title: string | null
      order: number | null
    }, ExtArgs["result"]["vibeVideo"]>
    composites: {}
  }

  type VibeVideoGetPayload<S extends boolean | null | undefined | VibeVideoDefaultArgs> = $Result.GetResult<Prisma.$VibeVideoPayload, S>

  type VibeVideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VibeVideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VibeVideoCountAggregateInputType | true
    }

  export interface VibeVideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VibeVideo'], meta: { name: 'VibeVideo' } }
    /**
     * Find zero or one VibeVideo that matches the filter.
     * @param {VibeVideoFindUniqueArgs} args - Arguments to find a VibeVideo
     * @example
     * // Get one VibeVideo
     * const vibeVideo = await prisma.vibeVideo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VibeVideoFindUniqueArgs>(args: SelectSubset<T, VibeVideoFindUniqueArgs<ExtArgs>>): Prisma__VibeVideoClient<$Result.GetResult<Prisma.$VibeVideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VibeVideo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VibeVideoFindUniqueOrThrowArgs} args - Arguments to find a VibeVideo
     * @example
     * // Get one VibeVideo
     * const vibeVideo = await prisma.vibeVideo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VibeVideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VibeVideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VibeVideoClient<$Result.GetResult<Prisma.$VibeVideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VibeVideo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeVideoFindFirstArgs} args - Arguments to find a VibeVideo
     * @example
     * // Get one VibeVideo
     * const vibeVideo = await prisma.vibeVideo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VibeVideoFindFirstArgs>(args?: SelectSubset<T, VibeVideoFindFirstArgs<ExtArgs>>): Prisma__VibeVideoClient<$Result.GetResult<Prisma.$VibeVideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VibeVideo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeVideoFindFirstOrThrowArgs} args - Arguments to find a VibeVideo
     * @example
     * // Get one VibeVideo
     * const vibeVideo = await prisma.vibeVideo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VibeVideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VibeVideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VibeVideoClient<$Result.GetResult<Prisma.$VibeVideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VibeVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeVideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VibeVideos
     * const vibeVideos = await prisma.vibeVideo.findMany()
     * 
     * // Get first 10 VibeVideos
     * const vibeVideos = await prisma.vibeVideo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vibeVideoWithIdOnly = await prisma.vibeVideo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VibeVideoFindManyArgs>(args?: SelectSubset<T, VibeVideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VibeVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VibeVideo.
     * @param {VibeVideoCreateArgs} args - Arguments to create a VibeVideo.
     * @example
     * // Create one VibeVideo
     * const VibeVideo = await prisma.vibeVideo.create({
     *   data: {
     *     // ... data to create a VibeVideo
     *   }
     * })
     * 
     */
    create<T extends VibeVideoCreateArgs>(args: SelectSubset<T, VibeVideoCreateArgs<ExtArgs>>): Prisma__VibeVideoClient<$Result.GetResult<Prisma.$VibeVideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VibeVideos.
     * @param {VibeVideoCreateManyArgs} args - Arguments to create many VibeVideos.
     * @example
     * // Create many VibeVideos
     * const vibeVideo = await prisma.vibeVideo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VibeVideoCreateManyArgs>(args?: SelectSubset<T, VibeVideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VibeVideos and returns the data saved in the database.
     * @param {VibeVideoCreateManyAndReturnArgs} args - Arguments to create many VibeVideos.
     * @example
     * // Create many VibeVideos
     * const vibeVideo = await prisma.vibeVideo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VibeVideos and only return the `id`
     * const vibeVideoWithIdOnly = await prisma.vibeVideo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VibeVideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VibeVideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VibeVideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VibeVideo.
     * @param {VibeVideoDeleteArgs} args - Arguments to delete one VibeVideo.
     * @example
     * // Delete one VibeVideo
     * const VibeVideo = await prisma.vibeVideo.delete({
     *   where: {
     *     // ... filter to delete one VibeVideo
     *   }
     * })
     * 
     */
    delete<T extends VibeVideoDeleteArgs>(args: SelectSubset<T, VibeVideoDeleteArgs<ExtArgs>>): Prisma__VibeVideoClient<$Result.GetResult<Prisma.$VibeVideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VibeVideo.
     * @param {VibeVideoUpdateArgs} args - Arguments to update one VibeVideo.
     * @example
     * // Update one VibeVideo
     * const vibeVideo = await prisma.vibeVideo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VibeVideoUpdateArgs>(args: SelectSubset<T, VibeVideoUpdateArgs<ExtArgs>>): Prisma__VibeVideoClient<$Result.GetResult<Prisma.$VibeVideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VibeVideos.
     * @param {VibeVideoDeleteManyArgs} args - Arguments to filter VibeVideos to delete.
     * @example
     * // Delete a few VibeVideos
     * const { count } = await prisma.vibeVideo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VibeVideoDeleteManyArgs>(args?: SelectSubset<T, VibeVideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VibeVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeVideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VibeVideos
     * const vibeVideo = await prisma.vibeVideo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VibeVideoUpdateManyArgs>(args: SelectSubset<T, VibeVideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VibeVideos and returns the data updated in the database.
     * @param {VibeVideoUpdateManyAndReturnArgs} args - Arguments to update many VibeVideos.
     * @example
     * // Update many VibeVideos
     * const vibeVideo = await prisma.vibeVideo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VibeVideos and only return the `id`
     * const vibeVideoWithIdOnly = await prisma.vibeVideo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VibeVideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VibeVideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VibeVideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VibeVideo.
     * @param {VibeVideoUpsertArgs} args - Arguments to update or create a VibeVideo.
     * @example
     * // Update or create a VibeVideo
     * const vibeVideo = await prisma.vibeVideo.upsert({
     *   create: {
     *     // ... data to create a VibeVideo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VibeVideo we want to update
     *   }
     * })
     */
    upsert<T extends VibeVideoUpsertArgs>(args: SelectSubset<T, VibeVideoUpsertArgs<ExtArgs>>): Prisma__VibeVideoClient<$Result.GetResult<Prisma.$VibeVideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VibeVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeVideoCountArgs} args - Arguments to filter VibeVideos to count.
     * @example
     * // Count the number of VibeVideos
     * const count = await prisma.vibeVideo.count({
     *   where: {
     *     // ... the filter for the VibeVideos we want to count
     *   }
     * })
    **/
    count<T extends VibeVideoCountArgs>(
      args?: Subset<T, VibeVideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VibeVideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VibeVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeVideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VibeVideoAggregateArgs>(args: Subset<T, VibeVideoAggregateArgs>): Prisma.PrismaPromise<GetVibeVideoAggregateType<T>>

    /**
     * Group by VibeVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeVideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VibeVideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VibeVideoGroupByArgs['orderBy'] }
        : { orderBy?: VibeVideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VibeVideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVibeVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VibeVideo model
   */
  readonly fields: VibeVideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VibeVideo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VibeVideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VibeVideo model
   */
  interface VibeVideoFieldRefs {
    readonly id: FieldRef<"VibeVideo", 'Int'>
    readonly url: FieldRef<"VibeVideo", 'String'>
    readonly title: FieldRef<"VibeVideo", 'String'>
    readonly order: FieldRef<"VibeVideo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VibeVideo findUnique
   */
  export type VibeVideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeVideo
     */
    select?: VibeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeVideo
     */
    omit?: VibeVideoOmit<ExtArgs> | null
    /**
     * Filter, which VibeVideo to fetch.
     */
    where: VibeVideoWhereUniqueInput
  }

  /**
   * VibeVideo findUniqueOrThrow
   */
  export type VibeVideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeVideo
     */
    select?: VibeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeVideo
     */
    omit?: VibeVideoOmit<ExtArgs> | null
    /**
     * Filter, which VibeVideo to fetch.
     */
    where: VibeVideoWhereUniqueInput
  }

  /**
   * VibeVideo findFirst
   */
  export type VibeVideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeVideo
     */
    select?: VibeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeVideo
     */
    omit?: VibeVideoOmit<ExtArgs> | null
    /**
     * Filter, which VibeVideo to fetch.
     */
    where?: VibeVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VibeVideos to fetch.
     */
    orderBy?: VibeVideoOrderByWithRelationInput | VibeVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VibeVideos.
     */
    cursor?: VibeVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VibeVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VibeVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VibeVideos.
     */
    distinct?: VibeVideoScalarFieldEnum | VibeVideoScalarFieldEnum[]
  }

  /**
   * VibeVideo findFirstOrThrow
   */
  export type VibeVideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeVideo
     */
    select?: VibeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeVideo
     */
    omit?: VibeVideoOmit<ExtArgs> | null
    /**
     * Filter, which VibeVideo to fetch.
     */
    where?: VibeVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VibeVideos to fetch.
     */
    orderBy?: VibeVideoOrderByWithRelationInput | VibeVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VibeVideos.
     */
    cursor?: VibeVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VibeVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VibeVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VibeVideos.
     */
    distinct?: VibeVideoScalarFieldEnum | VibeVideoScalarFieldEnum[]
  }

  /**
   * VibeVideo findMany
   */
  export type VibeVideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeVideo
     */
    select?: VibeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeVideo
     */
    omit?: VibeVideoOmit<ExtArgs> | null
    /**
     * Filter, which VibeVideos to fetch.
     */
    where?: VibeVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VibeVideos to fetch.
     */
    orderBy?: VibeVideoOrderByWithRelationInput | VibeVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VibeVideos.
     */
    cursor?: VibeVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VibeVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VibeVideos.
     */
    skip?: number
    distinct?: VibeVideoScalarFieldEnum | VibeVideoScalarFieldEnum[]
  }

  /**
   * VibeVideo create
   */
  export type VibeVideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeVideo
     */
    select?: VibeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeVideo
     */
    omit?: VibeVideoOmit<ExtArgs> | null
    /**
     * The data needed to create a VibeVideo.
     */
    data: XOR<VibeVideoCreateInput, VibeVideoUncheckedCreateInput>
  }

  /**
   * VibeVideo createMany
   */
  export type VibeVideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VibeVideos.
     */
    data: VibeVideoCreateManyInput | VibeVideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VibeVideo createManyAndReturn
   */
  export type VibeVideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeVideo
     */
    select?: VibeVideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VibeVideo
     */
    omit?: VibeVideoOmit<ExtArgs> | null
    /**
     * The data used to create many VibeVideos.
     */
    data: VibeVideoCreateManyInput | VibeVideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VibeVideo update
   */
  export type VibeVideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeVideo
     */
    select?: VibeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeVideo
     */
    omit?: VibeVideoOmit<ExtArgs> | null
    /**
     * The data needed to update a VibeVideo.
     */
    data: XOR<VibeVideoUpdateInput, VibeVideoUncheckedUpdateInput>
    /**
     * Choose, which VibeVideo to update.
     */
    where: VibeVideoWhereUniqueInput
  }

  /**
   * VibeVideo updateMany
   */
  export type VibeVideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VibeVideos.
     */
    data: XOR<VibeVideoUpdateManyMutationInput, VibeVideoUncheckedUpdateManyInput>
    /**
     * Filter which VibeVideos to update
     */
    where?: VibeVideoWhereInput
    /**
     * Limit how many VibeVideos to update.
     */
    limit?: number
  }

  /**
   * VibeVideo updateManyAndReturn
   */
  export type VibeVideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeVideo
     */
    select?: VibeVideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VibeVideo
     */
    omit?: VibeVideoOmit<ExtArgs> | null
    /**
     * The data used to update VibeVideos.
     */
    data: XOR<VibeVideoUpdateManyMutationInput, VibeVideoUncheckedUpdateManyInput>
    /**
     * Filter which VibeVideos to update
     */
    where?: VibeVideoWhereInput
    /**
     * Limit how many VibeVideos to update.
     */
    limit?: number
  }

  /**
   * VibeVideo upsert
   */
  export type VibeVideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeVideo
     */
    select?: VibeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeVideo
     */
    omit?: VibeVideoOmit<ExtArgs> | null
    /**
     * The filter to search for the VibeVideo to update in case it exists.
     */
    where: VibeVideoWhereUniqueInput
    /**
     * In case the VibeVideo found by the `where` argument doesn't exist, create a new VibeVideo with this data.
     */
    create: XOR<VibeVideoCreateInput, VibeVideoUncheckedCreateInput>
    /**
     * In case the VibeVideo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VibeVideoUpdateInput, VibeVideoUncheckedUpdateInput>
  }

  /**
   * VibeVideo delete
   */
  export type VibeVideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeVideo
     */
    select?: VibeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeVideo
     */
    omit?: VibeVideoOmit<ExtArgs> | null
    /**
     * Filter which VibeVideo to delete.
     */
    where: VibeVideoWhereUniqueInput
  }

  /**
   * VibeVideo deleteMany
   */
  export type VibeVideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VibeVideos to delete
     */
    where?: VibeVideoWhereInput
    /**
     * Limit how many VibeVideos to delete.
     */
    limit?: number
  }

  /**
   * VibeVideo without action
   */
  export type VibeVideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeVideo
     */
    select?: VibeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeVideo
     */
    omit?: VibeVideoOmit<ExtArgs> | null
  }


  /**
   * Model TripPricing
   */

  export type AggregateTripPricing = {
    _count: TripPricingCountAggregateOutputType | null
    _avg: TripPricingAvgAggregateOutputType | null
    _sum: TripPricingSumAggregateOutputType | null
    _min: TripPricingMinAggregateOutputType | null
    _max: TripPricingMaxAggregateOutputType | null
  }

  export type TripPricingAvgAggregateOutputType = {
    id: number | null
    tripDateId: number | null
    price: number | null
  }

  export type TripPricingSumAggregateOutputType = {
    id: number | null
    tripDateId: number | null
    price: number | null
  }

  export type TripPricingMinAggregateOutputType = {
    id: number | null
    tripDateId: number | null
    sharing: $Enums.SharingType | null
    price: number | null
  }

  export type TripPricingMaxAggregateOutputType = {
    id: number | null
    tripDateId: number | null
    sharing: $Enums.SharingType | null
    price: number | null
  }

  export type TripPricingCountAggregateOutputType = {
    id: number
    tripDateId: number
    sharing: number
    price: number
    _all: number
  }


  export type TripPricingAvgAggregateInputType = {
    id?: true
    tripDateId?: true
    price?: true
  }

  export type TripPricingSumAggregateInputType = {
    id?: true
    tripDateId?: true
    price?: true
  }

  export type TripPricingMinAggregateInputType = {
    id?: true
    tripDateId?: true
    sharing?: true
    price?: true
  }

  export type TripPricingMaxAggregateInputType = {
    id?: true
    tripDateId?: true
    sharing?: true
    price?: true
  }

  export type TripPricingCountAggregateInputType = {
    id?: true
    tripDateId?: true
    sharing?: true
    price?: true
    _all?: true
  }

  export type TripPricingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPricing to aggregate.
     */
    where?: TripPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPricings to fetch.
     */
    orderBy?: TripPricingOrderByWithRelationInput | TripPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripPricings
    **/
    _count?: true | TripPricingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripPricingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripPricingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripPricingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripPricingMaxAggregateInputType
  }

  export type GetTripPricingAggregateType<T extends TripPricingAggregateArgs> = {
        [P in keyof T & keyof AggregateTripPricing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripPricing[P]>
      : GetScalarType<T[P], AggregateTripPricing[P]>
  }




  export type TripPricingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPricingWhereInput
    orderBy?: TripPricingOrderByWithAggregationInput | TripPricingOrderByWithAggregationInput[]
    by: TripPricingScalarFieldEnum[] | TripPricingScalarFieldEnum
    having?: TripPricingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripPricingCountAggregateInputType | true
    _avg?: TripPricingAvgAggregateInputType
    _sum?: TripPricingSumAggregateInputType
    _min?: TripPricingMinAggregateInputType
    _max?: TripPricingMaxAggregateInputType
  }

  export type TripPricingGroupByOutputType = {
    id: number
    tripDateId: number
    sharing: $Enums.SharingType
    price: number
    _count: TripPricingCountAggregateOutputType | null
    _avg: TripPricingAvgAggregateOutputType | null
    _sum: TripPricingSumAggregateOutputType | null
    _min: TripPricingMinAggregateOutputType | null
    _max: TripPricingMaxAggregateOutputType | null
  }

  type GetTripPricingGroupByPayload<T extends TripPricingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripPricingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripPricingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripPricingGroupByOutputType[P]>
            : GetScalarType<T[P], TripPricingGroupByOutputType[P]>
        }
      >
    >


  export type TripPricingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripDateId?: boolean
    sharing?: boolean
    price?: boolean
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPricing"]>

  export type TripPricingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripDateId?: boolean
    sharing?: boolean
    price?: boolean
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPricing"]>

  export type TripPricingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripDateId?: boolean
    sharing?: boolean
    price?: boolean
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPricing"]>

  export type TripPricingSelectScalar = {
    id?: boolean
    tripDateId?: boolean
    sharing?: boolean
    price?: boolean
  }

  export type TripPricingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripDateId" | "sharing" | "price", ExtArgs["result"]["tripPricing"]>
  export type TripPricingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
  }
  export type TripPricingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
  }
  export type TripPricingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
  }

  export type $TripPricingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripPricing"
    objects: {
      tripDate: Prisma.$TripDatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tripDateId: number
      sharing: $Enums.SharingType
      price: number
    }, ExtArgs["result"]["tripPricing"]>
    composites: {}
  }

  type TripPricingGetPayload<S extends boolean | null | undefined | TripPricingDefaultArgs> = $Result.GetResult<Prisma.$TripPricingPayload, S>

  type TripPricingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripPricingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripPricingCountAggregateInputType | true
    }

  export interface TripPricingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripPricing'], meta: { name: 'TripPricing' } }
    /**
     * Find zero or one TripPricing that matches the filter.
     * @param {TripPricingFindUniqueArgs} args - Arguments to find a TripPricing
     * @example
     * // Get one TripPricing
     * const tripPricing = await prisma.tripPricing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripPricingFindUniqueArgs>(args: SelectSubset<T, TripPricingFindUniqueArgs<ExtArgs>>): Prisma__TripPricingClient<$Result.GetResult<Prisma.$TripPricingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripPricing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripPricingFindUniqueOrThrowArgs} args - Arguments to find a TripPricing
     * @example
     * // Get one TripPricing
     * const tripPricing = await prisma.tripPricing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripPricingFindUniqueOrThrowArgs>(args: SelectSubset<T, TripPricingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripPricingClient<$Result.GetResult<Prisma.$TripPricingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPricing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPricingFindFirstArgs} args - Arguments to find a TripPricing
     * @example
     * // Get one TripPricing
     * const tripPricing = await prisma.tripPricing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripPricingFindFirstArgs>(args?: SelectSubset<T, TripPricingFindFirstArgs<ExtArgs>>): Prisma__TripPricingClient<$Result.GetResult<Prisma.$TripPricingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPricing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPricingFindFirstOrThrowArgs} args - Arguments to find a TripPricing
     * @example
     * // Get one TripPricing
     * const tripPricing = await prisma.tripPricing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripPricingFindFirstOrThrowArgs>(args?: SelectSubset<T, TripPricingFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripPricingClient<$Result.GetResult<Prisma.$TripPricingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripPricings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPricingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripPricings
     * const tripPricings = await prisma.tripPricing.findMany()
     * 
     * // Get first 10 TripPricings
     * const tripPricings = await prisma.tripPricing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripPricingWithIdOnly = await prisma.tripPricing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripPricingFindManyArgs>(args?: SelectSubset<T, TripPricingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPricingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripPricing.
     * @param {TripPricingCreateArgs} args - Arguments to create a TripPricing.
     * @example
     * // Create one TripPricing
     * const TripPricing = await prisma.tripPricing.create({
     *   data: {
     *     // ... data to create a TripPricing
     *   }
     * })
     * 
     */
    create<T extends TripPricingCreateArgs>(args: SelectSubset<T, TripPricingCreateArgs<ExtArgs>>): Prisma__TripPricingClient<$Result.GetResult<Prisma.$TripPricingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripPricings.
     * @param {TripPricingCreateManyArgs} args - Arguments to create many TripPricings.
     * @example
     * // Create many TripPricings
     * const tripPricing = await prisma.tripPricing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripPricingCreateManyArgs>(args?: SelectSubset<T, TripPricingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripPricings and returns the data saved in the database.
     * @param {TripPricingCreateManyAndReturnArgs} args - Arguments to create many TripPricings.
     * @example
     * // Create many TripPricings
     * const tripPricing = await prisma.tripPricing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripPricings and only return the `id`
     * const tripPricingWithIdOnly = await prisma.tripPricing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripPricingCreateManyAndReturnArgs>(args?: SelectSubset<T, TripPricingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPricingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripPricing.
     * @param {TripPricingDeleteArgs} args - Arguments to delete one TripPricing.
     * @example
     * // Delete one TripPricing
     * const TripPricing = await prisma.tripPricing.delete({
     *   where: {
     *     // ... filter to delete one TripPricing
     *   }
     * })
     * 
     */
    delete<T extends TripPricingDeleteArgs>(args: SelectSubset<T, TripPricingDeleteArgs<ExtArgs>>): Prisma__TripPricingClient<$Result.GetResult<Prisma.$TripPricingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripPricing.
     * @param {TripPricingUpdateArgs} args - Arguments to update one TripPricing.
     * @example
     * // Update one TripPricing
     * const tripPricing = await prisma.tripPricing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripPricingUpdateArgs>(args: SelectSubset<T, TripPricingUpdateArgs<ExtArgs>>): Prisma__TripPricingClient<$Result.GetResult<Prisma.$TripPricingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripPricings.
     * @param {TripPricingDeleteManyArgs} args - Arguments to filter TripPricings to delete.
     * @example
     * // Delete a few TripPricings
     * const { count } = await prisma.tripPricing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripPricingDeleteManyArgs>(args?: SelectSubset<T, TripPricingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPricingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripPricings
     * const tripPricing = await prisma.tripPricing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripPricingUpdateManyArgs>(args: SelectSubset<T, TripPricingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPricings and returns the data updated in the database.
     * @param {TripPricingUpdateManyAndReturnArgs} args - Arguments to update many TripPricings.
     * @example
     * // Update many TripPricings
     * const tripPricing = await prisma.tripPricing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripPricings and only return the `id`
     * const tripPricingWithIdOnly = await prisma.tripPricing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripPricingUpdateManyAndReturnArgs>(args: SelectSubset<T, TripPricingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPricingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripPricing.
     * @param {TripPricingUpsertArgs} args - Arguments to update or create a TripPricing.
     * @example
     * // Update or create a TripPricing
     * const tripPricing = await prisma.tripPricing.upsert({
     *   create: {
     *     // ... data to create a TripPricing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripPricing we want to update
     *   }
     * })
     */
    upsert<T extends TripPricingUpsertArgs>(args: SelectSubset<T, TripPricingUpsertArgs<ExtArgs>>): Prisma__TripPricingClient<$Result.GetResult<Prisma.$TripPricingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripPricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPricingCountArgs} args - Arguments to filter TripPricings to count.
     * @example
     * // Count the number of TripPricings
     * const count = await prisma.tripPricing.count({
     *   where: {
     *     // ... the filter for the TripPricings we want to count
     *   }
     * })
    **/
    count<T extends TripPricingCountArgs>(
      args?: Subset<T, TripPricingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripPricingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripPricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPricingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripPricingAggregateArgs>(args: Subset<T, TripPricingAggregateArgs>): Prisma.PrismaPromise<GetTripPricingAggregateType<T>>

    /**
     * Group by TripPricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPricingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripPricingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripPricingGroupByArgs['orderBy'] }
        : { orderBy?: TripPricingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripPricingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripPricingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripPricing model
   */
  readonly fields: TripPricingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripPricing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripPricingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tripDate<T extends TripDateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDateDefaultArgs<ExtArgs>>): Prisma__TripDateClient<$Result.GetResult<Prisma.$TripDatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TripPricing model
   */
  interface TripPricingFieldRefs {
    readonly id: FieldRef<"TripPricing", 'Int'>
    readonly tripDateId: FieldRef<"TripPricing", 'Int'>
    readonly sharing: FieldRef<"TripPricing", 'SharingType'>
    readonly price: FieldRef<"TripPricing", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TripPricing findUnique
   */
  export type TripPricingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPricing
     */
    select?: TripPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPricing
     */
    omit?: TripPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPricingInclude<ExtArgs> | null
    /**
     * Filter, which TripPricing to fetch.
     */
    where: TripPricingWhereUniqueInput
  }

  /**
   * TripPricing findUniqueOrThrow
   */
  export type TripPricingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPricing
     */
    select?: TripPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPricing
     */
    omit?: TripPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPricingInclude<ExtArgs> | null
    /**
     * Filter, which TripPricing to fetch.
     */
    where: TripPricingWhereUniqueInput
  }

  /**
   * TripPricing findFirst
   */
  export type TripPricingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPricing
     */
    select?: TripPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPricing
     */
    omit?: TripPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPricingInclude<ExtArgs> | null
    /**
     * Filter, which TripPricing to fetch.
     */
    where?: TripPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPricings to fetch.
     */
    orderBy?: TripPricingOrderByWithRelationInput | TripPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPricings.
     */
    cursor?: TripPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPricings.
     */
    distinct?: TripPricingScalarFieldEnum | TripPricingScalarFieldEnum[]
  }

  /**
   * TripPricing findFirstOrThrow
   */
  export type TripPricingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPricing
     */
    select?: TripPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPricing
     */
    omit?: TripPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPricingInclude<ExtArgs> | null
    /**
     * Filter, which TripPricing to fetch.
     */
    where?: TripPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPricings to fetch.
     */
    orderBy?: TripPricingOrderByWithRelationInput | TripPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPricings.
     */
    cursor?: TripPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPricings.
     */
    distinct?: TripPricingScalarFieldEnum | TripPricingScalarFieldEnum[]
  }

  /**
   * TripPricing findMany
   */
  export type TripPricingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPricing
     */
    select?: TripPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPricing
     */
    omit?: TripPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPricingInclude<ExtArgs> | null
    /**
     * Filter, which TripPricings to fetch.
     */
    where?: TripPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPricings to fetch.
     */
    orderBy?: TripPricingOrderByWithRelationInput | TripPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripPricings.
     */
    cursor?: TripPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPricings.
     */
    skip?: number
    distinct?: TripPricingScalarFieldEnum | TripPricingScalarFieldEnum[]
  }

  /**
   * TripPricing create
   */
  export type TripPricingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPricing
     */
    select?: TripPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPricing
     */
    omit?: TripPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPricingInclude<ExtArgs> | null
    /**
     * The data needed to create a TripPricing.
     */
    data: XOR<TripPricingCreateInput, TripPricingUncheckedCreateInput>
  }

  /**
   * TripPricing createMany
   */
  export type TripPricingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripPricings.
     */
    data: TripPricingCreateManyInput | TripPricingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripPricing createManyAndReturn
   */
  export type TripPricingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPricing
     */
    select?: TripPricingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPricing
     */
    omit?: TripPricingOmit<ExtArgs> | null
    /**
     * The data used to create many TripPricings.
     */
    data: TripPricingCreateManyInput | TripPricingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPricingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPricing update
   */
  export type TripPricingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPricing
     */
    select?: TripPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPricing
     */
    omit?: TripPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPricingInclude<ExtArgs> | null
    /**
     * The data needed to update a TripPricing.
     */
    data: XOR<TripPricingUpdateInput, TripPricingUncheckedUpdateInput>
    /**
     * Choose, which TripPricing to update.
     */
    where: TripPricingWhereUniqueInput
  }

  /**
   * TripPricing updateMany
   */
  export type TripPricingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripPricings.
     */
    data: XOR<TripPricingUpdateManyMutationInput, TripPricingUncheckedUpdateManyInput>
    /**
     * Filter which TripPricings to update
     */
    where?: TripPricingWhereInput
    /**
     * Limit how many TripPricings to update.
     */
    limit?: number
  }

  /**
   * TripPricing updateManyAndReturn
   */
  export type TripPricingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPricing
     */
    select?: TripPricingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPricing
     */
    omit?: TripPricingOmit<ExtArgs> | null
    /**
     * The data used to update TripPricings.
     */
    data: XOR<TripPricingUpdateManyMutationInput, TripPricingUncheckedUpdateManyInput>
    /**
     * Filter which TripPricings to update
     */
    where?: TripPricingWhereInput
    /**
     * Limit how many TripPricings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPricingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPricing upsert
   */
  export type TripPricingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPricing
     */
    select?: TripPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPricing
     */
    omit?: TripPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPricingInclude<ExtArgs> | null
    /**
     * The filter to search for the TripPricing to update in case it exists.
     */
    where: TripPricingWhereUniqueInput
    /**
     * In case the TripPricing found by the `where` argument doesn't exist, create a new TripPricing with this data.
     */
    create: XOR<TripPricingCreateInput, TripPricingUncheckedCreateInput>
    /**
     * In case the TripPricing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripPricingUpdateInput, TripPricingUncheckedUpdateInput>
  }

  /**
   * TripPricing delete
   */
  export type TripPricingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPricing
     */
    select?: TripPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPricing
     */
    omit?: TripPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPricingInclude<ExtArgs> | null
    /**
     * Filter which TripPricing to delete.
     */
    where: TripPricingWhereUniqueInput
  }

  /**
   * TripPricing deleteMany
   */
  export type TripPricingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPricings to delete
     */
    where?: TripPricingWhereInput
    /**
     * Limit how many TripPricings to delete.
     */
    limit?: number
  }

  /**
   * TripPricing without action
   */
  export type TripPricingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPricing
     */
    select?: TripPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPricing
     */
    omit?: TripPricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPricingInclude<ExtArgs> | null
  }


  /**
   * Model Faq
   */

  export type AggregateFaq = {
    _count: FaqCountAggregateOutputType | null
    _avg: FaqAvgAggregateOutputType | null
    _sum: FaqSumAggregateOutputType | null
    _min: FaqMinAggregateOutputType | null
    _max: FaqMaxAggregateOutputType | null
  }

  export type FaqAvgAggregateOutputType = {
    id: number | null
    tourId: number | null
  }

  export type FaqSumAggregateOutputType = {
    id: number | null
    tourId: number | null
  }

  export type FaqMinAggregateOutputType = {
    id: number | null
    tourId: number | null
    question: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FaqMaxAggregateOutputType = {
    id: number | null
    tourId: number | null
    question: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FaqCountAggregateOutputType = {
    id: number
    tourId: number
    question: number
    answer: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FaqAvgAggregateInputType = {
    id?: true
    tourId?: true
  }

  export type FaqSumAggregateInputType = {
    id?: true
    tourId?: true
  }

  export type FaqMinAggregateInputType = {
    id?: true
    tourId?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FaqMaxAggregateInputType = {
    id?: true
    tourId?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FaqCountAggregateInputType = {
    id?: true
    tourId?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FaqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faq to aggregate.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faqs
    **/
    _count?: true | FaqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaqAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaqSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaqMaxAggregateInputType
  }

  export type GetFaqAggregateType<T extends FaqAggregateArgs> = {
        [P in keyof T & keyof AggregateFaq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaq[P]>
      : GetScalarType<T[P], AggregateFaq[P]>
  }




  export type FaqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaqWhereInput
    orderBy?: FaqOrderByWithAggregationInput | FaqOrderByWithAggregationInput[]
    by: FaqScalarFieldEnum[] | FaqScalarFieldEnum
    having?: FaqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaqCountAggregateInputType | true
    _avg?: FaqAvgAggregateInputType
    _sum?: FaqSumAggregateInputType
    _min?: FaqMinAggregateInputType
    _max?: FaqMaxAggregateInputType
  }

  export type FaqGroupByOutputType = {
    id: number
    tourId: number
    question: string
    answer: string
    createdAt: Date
    updatedAt: Date
    _count: FaqCountAggregateOutputType | null
    _avg: FaqAvgAggregateOutputType | null
    _sum: FaqSumAggregateOutputType | null
    _min: FaqMinAggregateOutputType | null
    _max: FaqMaxAggregateOutputType | null
  }

  type GetFaqGroupByPayload<T extends FaqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaqGroupByOutputType[P]>
            : GetScalarType<T[P], FaqGroupByOutputType[P]>
        }
      >
    >


  export type FaqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faq"]>

  export type FaqSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faq"]>

  export type FaqSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faq"]>

  export type FaqSelectScalar = {
    id?: boolean
    tourId?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FaqOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tourId" | "question" | "answer" | "createdAt" | "updatedAt", ExtArgs["result"]["faq"]>
  export type FaqInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type FaqIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type FaqIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $FaqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Faq"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tourId: number
      question: string
      answer: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["faq"]>
    composites: {}
  }

  type FaqGetPayload<S extends boolean | null | undefined | FaqDefaultArgs> = $Result.GetResult<Prisma.$FaqPayload, S>

  type FaqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FaqFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FaqCountAggregateInputType | true
    }

  export interface FaqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Faq'], meta: { name: 'Faq' } }
    /**
     * Find zero or one Faq that matches the filter.
     * @param {FaqFindUniqueArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FaqFindUniqueArgs>(args: SelectSubset<T, FaqFindUniqueArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faq that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FaqFindUniqueOrThrowArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FaqFindUniqueOrThrowArgs>(args: SelectSubset<T, FaqFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faq that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindFirstArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FaqFindFirstArgs>(args?: SelectSubset<T, FaqFindFirstArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faq that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindFirstOrThrowArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FaqFindFirstOrThrowArgs>(args?: SelectSubset<T, FaqFindFirstOrThrowArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faqs
     * const faqs = await prisma.faq.findMany()
     * 
     * // Get first 10 Faqs
     * const faqs = await prisma.faq.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faqWithIdOnly = await prisma.faq.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FaqFindManyArgs>(args?: SelectSubset<T, FaqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faq.
     * @param {FaqCreateArgs} args - Arguments to create a Faq.
     * @example
     * // Create one Faq
     * const Faq = await prisma.faq.create({
     *   data: {
     *     // ... data to create a Faq
     *   }
     * })
     * 
     */
    create<T extends FaqCreateArgs>(args: SelectSubset<T, FaqCreateArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faqs.
     * @param {FaqCreateManyArgs} args - Arguments to create many Faqs.
     * @example
     * // Create many Faqs
     * const faq = await prisma.faq.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FaqCreateManyArgs>(args?: SelectSubset<T, FaqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Faqs and returns the data saved in the database.
     * @param {FaqCreateManyAndReturnArgs} args - Arguments to create many Faqs.
     * @example
     * // Create many Faqs
     * const faq = await prisma.faq.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Faqs and only return the `id`
     * const faqWithIdOnly = await prisma.faq.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FaqCreateManyAndReturnArgs>(args?: SelectSubset<T, FaqCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Faq.
     * @param {FaqDeleteArgs} args - Arguments to delete one Faq.
     * @example
     * // Delete one Faq
     * const Faq = await prisma.faq.delete({
     *   where: {
     *     // ... filter to delete one Faq
     *   }
     * })
     * 
     */
    delete<T extends FaqDeleteArgs>(args: SelectSubset<T, FaqDeleteArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faq.
     * @param {FaqUpdateArgs} args - Arguments to update one Faq.
     * @example
     * // Update one Faq
     * const faq = await prisma.faq.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FaqUpdateArgs>(args: SelectSubset<T, FaqUpdateArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faqs.
     * @param {FaqDeleteManyArgs} args - Arguments to filter Faqs to delete.
     * @example
     * // Delete a few Faqs
     * const { count } = await prisma.faq.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FaqDeleteManyArgs>(args?: SelectSubset<T, FaqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faqs
     * const faq = await prisma.faq.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FaqUpdateManyArgs>(args: SelectSubset<T, FaqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faqs and returns the data updated in the database.
     * @param {FaqUpdateManyAndReturnArgs} args - Arguments to update many Faqs.
     * @example
     * // Update many Faqs
     * const faq = await prisma.faq.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Faqs and only return the `id`
     * const faqWithIdOnly = await prisma.faq.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FaqUpdateManyAndReturnArgs>(args: SelectSubset<T, FaqUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Faq.
     * @param {FaqUpsertArgs} args - Arguments to update or create a Faq.
     * @example
     * // Update or create a Faq
     * const faq = await prisma.faq.upsert({
     *   create: {
     *     // ... data to create a Faq
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faq we want to update
     *   }
     * })
     */
    upsert<T extends FaqUpsertArgs>(args: SelectSubset<T, FaqUpsertArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqCountArgs} args - Arguments to filter Faqs to count.
     * @example
     * // Count the number of Faqs
     * const count = await prisma.faq.count({
     *   where: {
     *     // ... the filter for the Faqs we want to count
     *   }
     * })
    **/
    count<T extends FaqCountArgs>(
      args?: Subset<T, FaqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FaqAggregateArgs>(args: Subset<T, FaqAggregateArgs>): Prisma.PrismaPromise<GetFaqAggregateType<T>>

    /**
     * Group by Faq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FaqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaqGroupByArgs['orderBy'] }
        : { orderBy?: FaqGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FaqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Faq model
   */
  readonly fields: FaqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Faq.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Faq model
   */
  interface FaqFieldRefs {
    readonly id: FieldRef<"Faq", 'Int'>
    readonly tourId: FieldRef<"Faq", 'Int'>
    readonly question: FieldRef<"Faq", 'String'>
    readonly answer: FieldRef<"Faq", 'String'>
    readonly createdAt: FieldRef<"Faq", 'DateTime'>
    readonly updatedAt: FieldRef<"Faq", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Faq findUnique
   */
  export type FaqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaqInclude<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq findUniqueOrThrow
   */
  export type FaqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaqInclude<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq findFirst
   */
  export type FaqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaqInclude<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faqs.
     */
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq findFirstOrThrow
   */
  export type FaqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaqInclude<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faqs.
     */
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq findMany
   */
  export type FaqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaqInclude<ExtArgs> | null
    /**
     * Filter, which Faqs to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq create
   */
  export type FaqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaqInclude<ExtArgs> | null
    /**
     * The data needed to create a Faq.
     */
    data: XOR<FaqCreateInput, FaqUncheckedCreateInput>
  }

  /**
   * Faq createMany
   */
  export type FaqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faqs.
     */
    data: FaqCreateManyInput | FaqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faq createManyAndReturn
   */
  export type FaqCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data used to create many Faqs.
     */
    data: FaqCreateManyInput | FaqCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaqIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Faq update
   */
  export type FaqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaqInclude<ExtArgs> | null
    /**
     * The data needed to update a Faq.
     */
    data: XOR<FaqUpdateInput, FaqUncheckedUpdateInput>
    /**
     * Choose, which Faq to update.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq updateMany
   */
  export type FaqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faqs.
     */
    data: XOR<FaqUpdateManyMutationInput, FaqUncheckedUpdateManyInput>
    /**
     * Filter which Faqs to update
     */
    where?: FaqWhereInput
    /**
     * Limit how many Faqs to update.
     */
    limit?: number
  }

  /**
   * Faq updateManyAndReturn
   */
  export type FaqUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data used to update Faqs.
     */
    data: XOR<FaqUpdateManyMutationInput, FaqUncheckedUpdateManyInput>
    /**
     * Filter which Faqs to update
     */
    where?: FaqWhereInput
    /**
     * Limit how many Faqs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaqIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Faq upsert
   */
  export type FaqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaqInclude<ExtArgs> | null
    /**
     * The filter to search for the Faq to update in case it exists.
     */
    where: FaqWhereUniqueInput
    /**
     * In case the Faq found by the `where` argument doesn't exist, create a new Faq with this data.
     */
    create: XOR<FaqCreateInput, FaqUncheckedCreateInput>
    /**
     * In case the Faq was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaqUpdateInput, FaqUncheckedUpdateInput>
  }

  /**
   * Faq delete
   */
  export type FaqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaqInclude<ExtArgs> | null
    /**
     * Filter which Faq to delete.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq deleteMany
   */
  export type FaqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faqs to delete
     */
    where?: FaqWhereInput
    /**
     * Limit how many Faqs to delete.
     */
    limit?: number
  }

  /**
   * Faq without action
   */
  export type FaqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaqInclude<ExtArgs> | null
  }


  /**
   * Model BookingSession
   */

  export type AggregateBookingSession = {
    _count: BookingSessionCountAggregateOutputType | null
    _avg: BookingSessionAvgAggregateOutputType | null
    _sum: BookingSessionSumAggregateOutputType | null
    _min: BookingSessionMinAggregateOutputType | null
    _max: BookingSessionMaxAggregateOutputType | null
  }

  export type BookingSessionAvgAggregateOutputType = {
    tripId: number | null
    tripDateId: number | null
    seatCount: number | null
  }

  export type BookingSessionSumAggregateOutputType = {
    tripId: number | null
    tripDateId: number | null
    seatCount: number | null
  }

  export type BookingSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tripId: number | null
    tripDateId: number | null
    seatCount: number | null
    status: $Enums.BookingSessionStatus | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tripId: number | null
    tripDateId: number | null
    seatCount: number | null
    status: $Enums.BookingSessionStatus | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingSessionCountAggregateOutputType = {
    id: number
    userId: number
    tripId: number
    tripDateId: number
    seatCount: number
    status: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingSessionAvgAggregateInputType = {
    tripId?: true
    tripDateId?: true
    seatCount?: true
  }

  export type BookingSessionSumAggregateInputType = {
    tripId?: true
    tripDateId?: true
    seatCount?: true
  }

  export type BookingSessionMinAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    tripDateId?: true
    seatCount?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    tripDateId?: true
    seatCount?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingSessionCountAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    tripDateId?: true
    seatCount?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingSession to aggregate.
     */
    where?: BookingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingSessions to fetch.
     */
    orderBy?: BookingSessionOrderByWithRelationInput | BookingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingSessions
    **/
    _count?: true | BookingSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingSessionMaxAggregateInputType
  }

  export type GetBookingSessionAggregateType<T extends BookingSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingSession[P]>
      : GetScalarType<T[P], AggregateBookingSession[P]>
  }




  export type BookingSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingSessionWhereInput
    orderBy?: BookingSessionOrderByWithAggregationInput | BookingSessionOrderByWithAggregationInput[]
    by: BookingSessionScalarFieldEnum[] | BookingSessionScalarFieldEnum
    having?: BookingSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingSessionCountAggregateInputType | true
    _avg?: BookingSessionAvgAggregateInputType
    _sum?: BookingSessionSumAggregateInputType
    _min?: BookingSessionMinAggregateInputType
    _max?: BookingSessionMaxAggregateInputType
  }

  export type BookingSessionGroupByOutputType = {
    id: string
    userId: string
    tripId: number
    tripDateId: number
    seatCount: number
    status: $Enums.BookingSessionStatus
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: BookingSessionCountAggregateOutputType | null
    _avg: BookingSessionAvgAggregateOutputType | null
    _sum: BookingSessionSumAggregateOutputType | null
    _min: BookingSessionMinAggregateOutputType | null
    _max: BookingSessionMaxAggregateOutputType | null
  }

  type GetBookingSessionGroupByPayload<T extends BookingSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingSessionGroupByOutputType[P]>
            : GetScalarType<T[P], BookingSessionGroupByOutputType[P]>
        }
      >
    >


  export type BookingSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    tripDateId?: boolean
    seatCount?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingSession"]>

  export type BookingSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    tripDateId?: boolean
    seatCount?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingSession"]>

  export type BookingSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    tripDateId?: boolean
    seatCount?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingSession"]>

  export type BookingSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    tripId?: boolean
    tripDateId?: boolean
    seatCount?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tripId" | "tripDateId" | "seatCount" | "status" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["bookingSession"]>
  export type BookingSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
  }
  export type BookingSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
  }
  export type BookingSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
    tripDate?: boolean | TripDateDefaultArgs<ExtArgs>
  }

  export type $BookingSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trip: Prisma.$TripPayload<ExtArgs>
      tripDate: Prisma.$TripDatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tripId: number
      tripDateId: number
      seatCount: number
      status: $Enums.BookingSessionStatus
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookingSession"]>
    composites: {}
  }

  type BookingSessionGetPayload<S extends boolean | null | undefined | BookingSessionDefaultArgs> = $Result.GetResult<Prisma.$BookingSessionPayload, S>

  type BookingSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingSessionCountAggregateInputType | true
    }

  export interface BookingSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingSession'], meta: { name: 'BookingSession' } }
    /**
     * Find zero or one BookingSession that matches the filter.
     * @param {BookingSessionFindUniqueArgs} args - Arguments to find a BookingSession
     * @example
     * // Get one BookingSession
     * const bookingSession = await prisma.bookingSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingSessionFindUniqueArgs>(args: SelectSubset<T, BookingSessionFindUniqueArgs<ExtArgs>>): Prisma__BookingSessionClient<$Result.GetResult<Prisma.$BookingSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingSessionFindUniqueOrThrowArgs} args - Arguments to find a BookingSession
     * @example
     * // Get one BookingSession
     * const bookingSession = await prisma.bookingSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingSessionClient<$Result.GetResult<Prisma.$BookingSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSessionFindFirstArgs} args - Arguments to find a BookingSession
     * @example
     * // Get one BookingSession
     * const bookingSession = await prisma.bookingSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingSessionFindFirstArgs>(args?: SelectSubset<T, BookingSessionFindFirstArgs<ExtArgs>>): Prisma__BookingSessionClient<$Result.GetResult<Prisma.$BookingSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSessionFindFirstOrThrowArgs} args - Arguments to find a BookingSession
     * @example
     * // Get one BookingSession
     * const bookingSession = await prisma.bookingSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingSessionClient<$Result.GetResult<Prisma.$BookingSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingSessions
     * const bookingSessions = await prisma.bookingSession.findMany()
     * 
     * // Get first 10 BookingSessions
     * const bookingSessions = await prisma.bookingSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingSessionWithIdOnly = await prisma.bookingSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingSessionFindManyArgs>(args?: SelectSubset<T, BookingSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingSession.
     * @param {BookingSessionCreateArgs} args - Arguments to create a BookingSession.
     * @example
     * // Create one BookingSession
     * const BookingSession = await prisma.bookingSession.create({
     *   data: {
     *     // ... data to create a BookingSession
     *   }
     * })
     * 
     */
    create<T extends BookingSessionCreateArgs>(args: SelectSubset<T, BookingSessionCreateArgs<ExtArgs>>): Prisma__BookingSessionClient<$Result.GetResult<Prisma.$BookingSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingSessions.
     * @param {BookingSessionCreateManyArgs} args - Arguments to create many BookingSessions.
     * @example
     * // Create many BookingSessions
     * const bookingSession = await prisma.bookingSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingSessionCreateManyArgs>(args?: SelectSubset<T, BookingSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingSessions and returns the data saved in the database.
     * @param {BookingSessionCreateManyAndReturnArgs} args - Arguments to create many BookingSessions.
     * @example
     * // Create many BookingSessions
     * const bookingSession = await prisma.bookingSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingSessions and only return the `id`
     * const bookingSessionWithIdOnly = await prisma.bookingSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingSession.
     * @param {BookingSessionDeleteArgs} args - Arguments to delete one BookingSession.
     * @example
     * // Delete one BookingSession
     * const BookingSession = await prisma.bookingSession.delete({
     *   where: {
     *     // ... filter to delete one BookingSession
     *   }
     * })
     * 
     */
    delete<T extends BookingSessionDeleteArgs>(args: SelectSubset<T, BookingSessionDeleteArgs<ExtArgs>>): Prisma__BookingSessionClient<$Result.GetResult<Prisma.$BookingSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingSession.
     * @param {BookingSessionUpdateArgs} args - Arguments to update one BookingSession.
     * @example
     * // Update one BookingSession
     * const bookingSession = await prisma.bookingSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingSessionUpdateArgs>(args: SelectSubset<T, BookingSessionUpdateArgs<ExtArgs>>): Prisma__BookingSessionClient<$Result.GetResult<Prisma.$BookingSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingSessions.
     * @param {BookingSessionDeleteManyArgs} args - Arguments to filter BookingSessions to delete.
     * @example
     * // Delete a few BookingSessions
     * const { count } = await prisma.bookingSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingSessionDeleteManyArgs>(args?: SelectSubset<T, BookingSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingSessions
     * const bookingSession = await prisma.bookingSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingSessionUpdateManyArgs>(args: SelectSubset<T, BookingSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingSessions and returns the data updated in the database.
     * @param {BookingSessionUpdateManyAndReturnArgs} args - Arguments to update many BookingSessions.
     * @example
     * // Update many BookingSessions
     * const bookingSession = await prisma.bookingSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingSessions and only return the `id`
     * const bookingSessionWithIdOnly = await prisma.bookingSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingSession.
     * @param {BookingSessionUpsertArgs} args - Arguments to update or create a BookingSession.
     * @example
     * // Update or create a BookingSession
     * const bookingSession = await prisma.bookingSession.upsert({
     *   create: {
     *     // ... data to create a BookingSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingSession we want to update
     *   }
     * })
     */
    upsert<T extends BookingSessionUpsertArgs>(args: SelectSubset<T, BookingSessionUpsertArgs<ExtArgs>>): Prisma__BookingSessionClient<$Result.GetResult<Prisma.$BookingSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSessionCountArgs} args - Arguments to filter BookingSessions to count.
     * @example
     * // Count the number of BookingSessions
     * const count = await prisma.bookingSession.count({
     *   where: {
     *     // ... the filter for the BookingSessions we want to count
     *   }
     * })
    **/
    count<T extends BookingSessionCountArgs>(
      args?: Subset<T, BookingSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingSessionAggregateArgs>(args: Subset<T, BookingSessionAggregateArgs>): Prisma.PrismaPromise<GetBookingSessionAggregateType<T>>

    /**
     * Group by BookingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingSessionGroupByArgs['orderBy'] }
        : { orderBy?: BookingSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingSession model
   */
  readonly fields: BookingSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tripDate<T extends TripDateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDateDefaultArgs<ExtArgs>>): Prisma__TripDateClient<$Result.GetResult<Prisma.$TripDatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingSession model
   */
  interface BookingSessionFieldRefs {
    readonly id: FieldRef<"BookingSession", 'String'>
    readonly userId: FieldRef<"BookingSession", 'String'>
    readonly tripId: FieldRef<"BookingSession", 'Int'>
    readonly tripDateId: FieldRef<"BookingSession", 'Int'>
    readonly seatCount: FieldRef<"BookingSession", 'Int'>
    readonly status: FieldRef<"BookingSession", 'BookingSessionStatus'>
    readonly expiresAt: FieldRef<"BookingSession", 'DateTime'>
    readonly createdAt: FieldRef<"BookingSession", 'DateTime'>
    readonly updatedAt: FieldRef<"BookingSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookingSession findUnique
   */
  export type BookingSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSession
     */
    select?: BookingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSession
     */
    omit?: BookingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSessionInclude<ExtArgs> | null
    /**
     * Filter, which BookingSession to fetch.
     */
    where: BookingSessionWhereUniqueInput
  }

  /**
   * BookingSession findUniqueOrThrow
   */
  export type BookingSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSession
     */
    select?: BookingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSession
     */
    omit?: BookingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSessionInclude<ExtArgs> | null
    /**
     * Filter, which BookingSession to fetch.
     */
    where: BookingSessionWhereUniqueInput
  }

  /**
   * BookingSession findFirst
   */
  export type BookingSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSession
     */
    select?: BookingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSession
     */
    omit?: BookingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSessionInclude<ExtArgs> | null
    /**
     * Filter, which BookingSession to fetch.
     */
    where?: BookingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingSessions to fetch.
     */
    orderBy?: BookingSessionOrderByWithRelationInput | BookingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingSessions.
     */
    cursor?: BookingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingSessions.
     */
    distinct?: BookingSessionScalarFieldEnum | BookingSessionScalarFieldEnum[]
  }

  /**
   * BookingSession findFirstOrThrow
   */
  export type BookingSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSession
     */
    select?: BookingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSession
     */
    omit?: BookingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSessionInclude<ExtArgs> | null
    /**
     * Filter, which BookingSession to fetch.
     */
    where?: BookingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingSessions to fetch.
     */
    orderBy?: BookingSessionOrderByWithRelationInput | BookingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingSessions.
     */
    cursor?: BookingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingSessions.
     */
    distinct?: BookingSessionScalarFieldEnum | BookingSessionScalarFieldEnum[]
  }

  /**
   * BookingSession findMany
   */
  export type BookingSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSession
     */
    select?: BookingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSession
     */
    omit?: BookingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSessionInclude<ExtArgs> | null
    /**
     * Filter, which BookingSessions to fetch.
     */
    where?: BookingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingSessions to fetch.
     */
    orderBy?: BookingSessionOrderByWithRelationInput | BookingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingSessions.
     */
    cursor?: BookingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingSessions.
     */
    skip?: number
    distinct?: BookingSessionScalarFieldEnum | BookingSessionScalarFieldEnum[]
  }

  /**
   * BookingSession create
   */
  export type BookingSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSession
     */
    select?: BookingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSession
     */
    omit?: BookingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingSession.
     */
    data: XOR<BookingSessionCreateInput, BookingSessionUncheckedCreateInput>
  }

  /**
   * BookingSession createMany
   */
  export type BookingSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingSessions.
     */
    data: BookingSessionCreateManyInput | BookingSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingSession createManyAndReturn
   */
  export type BookingSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSession
     */
    select?: BookingSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSession
     */
    omit?: BookingSessionOmit<ExtArgs> | null
    /**
     * The data used to create many BookingSessions.
     */
    data: BookingSessionCreateManyInput | BookingSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingSession update
   */
  export type BookingSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSession
     */
    select?: BookingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSession
     */
    omit?: BookingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingSession.
     */
    data: XOR<BookingSessionUpdateInput, BookingSessionUncheckedUpdateInput>
    /**
     * Choose, which BookingSession to update.
     */
    where: BookingSessionWhereUniqueInput
  }

  /**
   * BookingSession updateMany
   */
  export type BookingSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingSessions.
     */
    data: XOR<BookingSessionUpdateManyMutationInput, BookingSessionUncheckedUpdateManyInput>
    /**
     * Filter which BookingSessions to update
     */
    where?: BookingSessionWhereInput
    /**
     * Limit how many BookingSessions to update.
     */
    limit?: number
  }

  /**
   * BookingSession updateManyAndReturn
   */
  export type BookingSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSession
     */
    select?: BookingSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSession
     */
    omit?: BookingSessionOmit<ExtArgs> | null
    /**
     * The data used to update BookingSessions.
     */
    data: XOR<BookingSessionUpdateManyMutationInput, BookingSessionUncheckedUpdateManyInput>
    /**
     * Filter which BookingSessions to update
     */
    where?: BookingSessionWhereInput
    /**
     * Limit how many BookingSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingSession upsert
   */
  export type BookingSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSession
     */
    select?: BookingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSession
     */
    omit?: BookingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingSession to update in case it exists.
     */
    where: BookingSessionWhereUniqueInput
    /**
     * In case the BookingSession found by the `where` argument doesn't exist, create a new BookingSession with this data.
     */
    create: XOR<BookingSessionCreateInput, BookingSessionUncheckedCreateInput>
    /**
     * In case the BookingSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingSessionUpdateInput, BookingSessionUncheckedUpdateInput>
  }

  /**
   * BookingSession delete
   */
  export type BookingSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSession
     */
    select?: BookingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSession
     */
    omit?: BookingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSessionInclude<ExtArgs> | null
    /**
     * Filter which BookingSession to delete.
     */
    where: BookingSessionWhereUniqueInput
  }

  /**
   * BookingSession deleteMany
   */
  export type BookingSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingSessions to delete
     */
    where?: BookingSessionWhereInput
    /**
     * Limit how many BookingSessions to delete.
     */
    limit?: number
  }

  /**
   * BookingSession without action
   */
  export type BookingSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSession
     */
    select?: BookingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSession
     */
    omit?: BookingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSessionInclude<ExtArgs> | null
  }


  /**
   * Model BookingItem
   */

  export type AggregateBookingItem = {
    _count: BookingItemCountAggregateOutputType | null
    _avg: BookingItemAvgAggregateOutputType | null
    _sum: BookingItemSumAggregateOutputType | null
    _min: BookingItemMinAggregateOutputType | null
    _max: BookingItemMaxAggregateOutputType | null
  }

  export type BookingItemAvgAggregateOutputType = {
    id: number | null
    bookingId: number | null
    quantity: number | null
    pricePerPerson: number | null
    subtotal: number | null
  }

  export type BookingItemSumAggregateOutputType = {
    id: number | null
    bookingId: number | null
    quantity: number | null
    pricePerPerson: number | null
    subtotal: number | null
  }

  export type BookingItemMinAggregateOutputType = {
    id: number | null
    bookingId: number | null
    sharingType: $Enums.SharingType | null
    quantity: number | null
    pricePerPerson: number | null
    subtotal: number | null
  }

  export type BookingItemMaxAggregateOutputType = {
    id: number | null
    bookingId: number | null
    sharingType: $Enums.SharingType | null
    quantity: number | null
    pricePerPerson: number | null
    subtotal: number | null
  }

  export type BookingItemCountAggregateOutputType = {
    id: number
    bookingId: number
    sharingType: number
    quantity: number
    pricePerPerson: number
    subtotal: number
    _all: number
  }


  export type BookingItemAvgAggregateInputType = {
    id?: true
    bookingId?: true
    quantity?: true
    pricePerPerson?: true
    subtotal?: true
  }

  export type BookingItemSumAggregateInputType = {
    id?: true
    bookingId?: true
    quantity?: true
    pricePerPerson?: true
    subtotal?: true
  }

  export type BookingItemMinAggregateInputType = {
    id?: true
    bookingId?: true
    sharingType?: true
    quantity?: true
    pricePerPerson?: true
    subtotal?: true
  }

  export type BookingItemMaxAggregateInputType = {
    id?: true
    bookingId?: true
    sharingType?: true
    quantity?: true
    pricePerPerson?: true
    subtotal?: true
  }

  export type BookingItemCountAggregateInputType = {
    id?: true
    bookingId?: true
    sharingType?: true
    quantity?: true
    pricePerPerson?: true
    subtotal?: true
    _all?: true
  }

  export type BookingItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingItem to aggregate.
     */
    where?: BookingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingItems to fetch.
     */
    orderBy?: BookingItemOrderByWithRelationInput | BookingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingItems
    **/
    _count?: true | BookingItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingItemMaxAggregateInputType
  }

  export type GetBookingItemAggregateType<T extends BookingItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingItem[P]>
      : GetScalarType<T[P], AggregateBookingItem[P]>
  }




  export type BookingItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingItemWhereInput
    orderBy?: BookingItemOrderByWithAggregationInput | BookingItemOrderByWithAggregationInput[]
    by: BookingItemScalarFieldEnum[] | BookingItemScalarFieldEnum
    having?: BookingItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingItemCountAggregateInputType | true
    _avg?: BookingItemAvgAggregateInputType
    _sum?: BookingItemSumAggregateInputType
    _min?: BookingItemMinAggregateInputType
    _max?: BookingItemMaxAggregateInputType
  }

  export type BookingItemGroupByOutputType = {
    id: number
    bookingId: number
    sharingType: $Enums.SharingType
    quantity: number
    pricePerPerson: number
    subtotal: number
    _count: BookingItemCountAggregateOutputType | null
    _avg: BookingItemAvgAggregateOutputType | null
    _sum: BookingItemSumAggregateOutputType | null
    _min: BookingItemMinAggregateOutputType | null
    _max: BookingItemMaxAggregateOutputType | null
  }

  type GetBookingItemGroupByPayload<T extends BookingItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingItemGroupByOutputType[P]>
            : GetScalarType<T[P], BookingItemGroupByOutputType[P]>
        }
      >
    >


  export type BookingItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    sharingType?: boolean
    quantity?: boolean
    pricePerPerson?: boolean
    subtotal?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingItem"]>

  export type BookingItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    sharingType?: boolean
    quantity?: boolean
    pricePerPerson?: boolean
    subtotal?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingItem"]>

  export type BookingItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    sharingType?: boolean
    quantity?: boolean
    pricePerPerson?: boolean
    subtotal?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingItem"]>

  export type BookingItemSelectScalar = {
    id?: boolean
    bookingId?: boolean
    sharingType?: boolean
    quantity?: boolean
    pricePerPerson?: boolean
    subtotal?: boolean
  }

  export type BookingItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "sharingType" | "quantity" | "pricePerPerson" | "subtotal", ExtArgs["result"]["bookingItem"]>
  export type BookingItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type BookingItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type BookingItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $BookingItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingItem"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookingId: number
      sharingType: $Enums.SharingType
      quantity: number
      pricePerPerson: number
      subtotal: number
    }, ExtArgs["result"]["bookingItem"]>
    composites: {}
  }

  type BookingItemGetPayload<S extends boolean | null | undefined | BookingItemDefaultArgs> = $Result.GetResult<Prisma.$BookingItemPayload, S>

  type BookingItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingItemCountAggregateInputType | true
    }

  export interface BookingItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingItem'], meta: { name: 'BookingItem' } }
    /**
     * Find zero or one BookingItem that matches the filter.
     * @param {BookingItemFindUniqueArgs} args - Arguments to find a BookingItem
     * @example
     * // Get one BookingItem
     * const bookingItem = await prisma.bookingItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingItemFindUniqueArgs>(args: SelectSubset<T, BookingItemFindUniqueArgs<ExtArgs>>): Prisma__BookingItemClient<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingItemFindUniqueOrThrowArgs} args - Arguments to find a BookingItem
     * @example
     * // Get one BookingItem
     * const bookingItem = await prisma.bookingItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingItemFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingItemClient<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemFindFirstArgs} args - Arguments to find a BookingItem
     * @example
     * // Get one BookingItem
     * const bookingItem = await prisma.bookingItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingItemFindFirstArgs>(args?: SelectSubset<T, BookingItemFindFirstArgs<ExtArgs>>): Prisma__BookingItemClient<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemFindFirstOrThrowArgs} args - Arguments to find a BookingItem
     * @example
     * // Get one BookingItem
     * const bookingItem = await prisma.bookingItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingItemFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingItemClient<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingItems
     * const bookingItems = await prisma.bookingItem.findMany()
     * 
     * // Get first 10 BookingItems
     * const bookingItems = await prisma.bookingItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingItemWithIdOnly = await prisma.bookingItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingItemFindManyArgs>(args?: SelectSubset<T, BookingItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingItem.
     * @param {BookingItemCreateArgs} args - Arguments to create a BookingItem.
     * @example
     * // Create one BookingItem
     * const BookingItem = await prisma.bookingItem.create({
     *   data: {
     *     // ... data to create a BookingItem
     *   }
     * })
     * 
     */
    create<T extends BookingItemCreateArgs>(args: SelectSubset<T, BookingItemCreateArgs<ExtArgs>>): Prisma__BookingItemClient<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingItems.
     * @param {BookingItemCreateManyArgs} args - Arguments to create many BookingItems.
     * @example
     * // Create many BookingItems
     * const bookingItem = await prisma.bookingItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingItemCreateManyArgs>(args?: SelectSubset<T, BookingItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingItems and returns the data saved in the database.
     * @param {BookingItemCreateManyAndReturnArgs} args - Arguments to create many BookingItems.
     * @example
     * // Create many BookingItems
     * const bookingItem = await prisma.bookingItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingItems and only return the `id`
     * const bookingItemWithIdOnly = await prisma.bookingItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingItemCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingItem.
     * @param {BookingItemDeleteArgs} args - Arguments to delete one BookingItem.
     * @example
     * // Delete one BookingItem
     * const BookingItem = await prisma.bookingItem.delete({
     *   where: {
     *     // ... filter to delete one BookingItem
     *   }
     * })
     * 
     */
    delete<T extends BookingItemDeleteArgs>(args: SelectSubset<T, BookingItemDeleteArgs<ExtArgs>>): Prisma__BookingItemClient<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingItem.
     * @param {BookingItemUpdateArgs} args - Arguments to update one BookingItem.
     * @example
     * // Update one BookingItem
     * const bookingItem = await prisma.bookingItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingItemUpdateArgs>(args: SelectSubset<T, BookingItemUpdateArgs<ExtArgs>>): Prisma__BookingItemClient<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingItems.
     * @param {BookingItemDeleteManyArgs} args - Arguments to filter BookingItems to delete.
     * @example
     * // Delete a few BookingItems
     * const { count } = await prisma.bookingItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingItemDeleteManyArgs>(args?: SelectSubset<T, BookingItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingItems
     * const bookingItem = await prisma.bookingItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingItemUpdateManyArgs>(args: SelectSubset<T, BookingItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingItems and returns the data updated in the database.
     * @param {BookingItemUpdateManyAndReturnArgs} args - Arguments to update many BookingItems.
     * @example
     * // Update many BookingItems
     * const bookingItem = await prisma.bookingItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingItems and only return the `id`
     * const bookingItemWithIdOnly = await prisma.bookingItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingItemUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingItem.
     * @param {BookingItemUpsertArgs} args - Arguments to update or create a BookingItem.
     * @example
     * // Update or create a BookingItem
     * const bookingItem = await prisma.bookingItem.upsert({
     *   create: {
     *     // ... data to create a BookingItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingItem we want to update
     *   }
     * })
     */
    upsert<T extends BookingItemUpsertArgs>(args: SelectSubset<T, BookingItemUpsertArgs<ExtArgs>>): Prisma__BookingItemClient<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemCountArgs} args - Arguments to filter BookingItems to count.
     * @example
     * // Count the number of BookingItems
     * const count = await prisma.bookingItem.count({
     *   where: {
     *     // ... the filter for the BookingItems we want to count
     *   }
     * })
    **/
    count<T extends BookingItemCountArgs>(
      args?: Subset<T, BookingItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingItemAggregateArgs>(args: Subset<T, BookingItemAggregateArgs>): Prisma.PrismaPromise<GetBookingItemAggregateType<T>>

    /**
     * Group by BookingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingItemGroupByArgs['orderBy'] }
        : { orderBy?: BookingItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingItem model
   */
  readonly fields: BookingItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingItem model
   */
  interface BookingItemFieldRefs {
    readonly id: FieldRef<"BookingItem", 'Int'>
    readonly bookingId: FieldRef<"BookingItem", 'Int'>
    readonly sharingType: FieldRef<"BookingItem", 'SharingType'>
    readonly quantity: FieldRef<"BookingItem", 'Int'>
    readonly pricePerPerson: FieldRef<"BookingItem", 'Int'>
    readonly subtotal: FieldRef<"BookingItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookingItem findUnique
   */
  export type BookingItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * Filter, which BookingItem to fetch.
     */
    where: BookingItemWhereUniqueInput
  }

  /**
   * BookingItem findUniqueOrThrow
   */
  export type BookingItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * Filter, which BookingItem to fetch.
     */
    where: BookingItemWhereUniqueInput
  }

  /**
   * BookingItem findFirst
   */
  export type BookingItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * Filter, which BookingItem to fetch.
     */
    where?: BookingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingItems to fetch.
     */
    orderBy?: BookingItemOrderByWithRelationInput | BookingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingItems.
     */
    cursor?: BookingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingItems.
     */
    distinct?: BookingItemScalarFieldEnum | BookingItemScalarFieldEnum[]
  }

  /**
   * BookingItem findFirstOrThrow
   */
  export type BookingItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * Filter, which BookingItem to fetch.
     */
    where?: BookingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingItems to fetch.
     */
    orderBy?: BookingItemOrderByWithRelationInput | BookingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingItems.
     */
    cursor?: BookingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingItems.
     */
    distinct?: BookingItemScalarFieldEnum | BookingItemScalarFieldEnum[]
  }

  /**
   * BookingItem findMany
   */
  export type BookingItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * Filter, which BookingItems to fetch.
     */
    where?: BookingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingItems to fetch.
     */
    orderBy?: BookingItemOrderByWithRelationInput | BookingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingItems.
     */
    cursor?: BookingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingItems.
     */
    skip?: number
    distinct?: BookingItemScalarFieldEnum | BookingItemScalarFieldEnum[]
  }

  /**
   * BookingItem create
   */
  export type BookingItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingItem.
     */
    data: XOR<BookingItemCreateInput, BookingItemUncheckedCreateInput>
  }

  /**
   * BookingItem createMany
   */
  export type BookingItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingItems.
     */
    data: BookingItemCreateManyInput | BookingItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingItem createManyAndReturn
   */
  export type BookingItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * The data used to create many BookingItems.
     */
    data: BookingItemCreateManyInput | BookingItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingItem update
   */
  export type BookingItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingItem.
     */
    data: XOR<BookingItemUpdateInput, BookingItemUncheckedUpdateInput>
    /**
     * Choose, which BookingItem to update.
     */
    where: BookingItemWhereUniqueInput
  }

  /**
   * BookingItem updateMany
   */
  export type BookingItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingItems.
     */
    data: XOR<BookingItemUpdateManyMutationInput, BookingItemUncheckedUpdateManyInput>
    /**
     * Filter which BookingItems to update
     */
    where?: BookingItemWhereInput
    /**
     * Limit how many BookingItems to update.
     */
    limit?: number
  }

  /**
   * BookingItem updateManyAndReturn
   */
  export type BookingItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * The data used to update BookingItems.
     */
    data: XOR<BookingItemUpdateManyMutationInput, BookingItemUncheckedUpdateManyInput>
    /**
     * Filter which BookingItems to update
     */
    where?: BookingItemWhereInput
    /**
     * Limit how many BookingItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingItem upsert
   */
  export type BookingItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingItem to update in case it exists.
     */
    where: BookingItemWhereUniqueInput
    /**
     * In case the BookingItem found by the `where` argument doesn't exist, create a new BookingItem with this data.
     */
    create: XOR<BookingItemCreateInput, BookingItemUncheckedCreateInput>
    /**
     * In case the BookingItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingItemUpdateInput, BookingItemUncheckedUpdateInput>
  }

  /**
   * BookingItem delete
   */
  export type BookingItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * Filter which BookingItem to delete.
     */
    where: BookingItemWhereUniqueInput
  }

  /**
   * BookingItem deleteMany
   */
  export type BookingItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingItems to delete
     */
    where?: BookingItemWhereInput
    /**
     * Limit how many BookingItems to delete.
     */
    limit?: number
  }

  /**
   * BookingItem without action
   */
  export type BookingItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    imageUrl: 'imageUrl',
    password: 'password',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tripId: 'tripId',
    tripDateId: 'tripDateId',
    mobileNumber: 'mobileNumber',
    status: 'status',
    totalAmount: 'totalAmount',
    totalSeats: 'totalSeats',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    userId: 'userId',
    tourId: 'tourId',
    review: 'review',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const TourScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    about: 'about',
    thumbnailImageUrl: 'thumbnailImageUrl',
    thumbnailVideoUrl: 'thumbnailVideoUrl',
    cardImageUrl: 'cardImageUrl',
    tourTypeId: 'tourTypeId',
    isActive: 'isActive',
    isFeatured: 'isFeatured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TourScalarFieldEnum = (typeof TourScalarFieldEnum)[keyof typeof TourScalarFieldEnum]


  export const TourTypeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    slug: 'slug',
    description: 'description',
    isActive: 'isActive',
    priority: 'priority'
  };

  export type TourTypeScalarFieldEnum = (typeof TourTypeScalarFieldEnum)[keyof typeof TourTypeScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    tourId: 'tourId',
    thumbnailImageUrl: 'thumbnailImageUrl',
    thumbnailVideoUrl: 'thumbnailVideoUrl',
    cardImageUrl: 'cardImageUrl',
    isFeature: 'isFeature',
    title: 'title',
    slug: 'slug',
    inclusion: 'inclusion',
    exclusion: 'exclusion',
    notes: 'notes',
    startingPrice: 'startingPrice',
    ItineraryLink: 'ItineraryLink',
    ItineraryImageUrl: 'ItineraryImageUrl',
    About: 'About'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const TripDateScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt'
  };

  export type TripDateScalarFieldEnum = (typeof TripDateScalarFieldEnum)[keyof typeof TripDateScalarFieldEnum]


  export const ItineraryScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    title: 'title',
    description: 'description',
    dayNumber: 'dayNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItineraryScalarFieldEnum = (typeof ItineraryScalarFieldEnum)[keyof typeof ItineraryScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const VibeVideoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    order: 'order'
  };

  export type VibeVideoScalarFieldEnum = (typeof VibeVideoScalarFieldEnum)[keyof typeof VibeVideoScalarFieldEnum]


  export const TripPricingScalarFieldEnum: {
    id: 'id',
    tripDateId: 'tripDateId',
    sharing: 'sharing',
    price: 'price'
  };

  export type TripPricingScalarFieldEnum = (typeof TripPricingScalarFieldEnum)[keyof typeof TripPricingScalarFieldEnum]


  export const FaqScalarFieldEnum: {
    id: 'id',
    tourId: 'tourId',
    question: 'question',
    answer: 'answer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FaqScalarFieldEnum = (typeof FaqScalarFieldEnum)[keyof typeof FaqScalarFieldEnum]


  export const BookingSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tripId: 'tripId',
    tripDateId: 'tripDateId',
    seatCount: 'seatCount',
    status: 'status',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingSessionScalarFieldEnum = (typeof BookingSessionScalarFieldEnum)[keyof typeof BookingSessionScalarFieldEnum]


  export const BookingItemScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    sharingType: 'sharingType',
    quantity: 'quantity',
    pricePerPerson: 'pricePerPerson',
    subtotal: 'subtotal'
  };

  export type BookingItemScalarFieldEnum = (typeof BookingItemScalarFieldEnum)[keyof typeof BookingItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'SharingType'
   */
  export type EnumSharingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SharingType'>
    


  /**
   * Reference to a field of type 'SharingType[]'
   */
  export type ListEnumSharingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SharingType[]'>
    


  /**
   * Reference to a field of type 'BookingSessionStatus'
   */
  export type EnumBookingSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingSessionStatus'>
    


  /**
   * Reference to a field of type 'BookingSessionStatus[]'
   */
  export type ListEnumBookingSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingSessionStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookingSession?: BookingSessionListRelationFilter
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookingSession?: BookingSessionOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookingSession?: BookingSessionListRelationFilter
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    userId?: StringFilter<"Booking"> | string
    tripId?: IntFilter<"Booking"> | number
    tripDateId?: IntFilter<"Booking"> | number
    mobileNumber?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    totalAmount?: IntFilter<"Booking"> | number
    totalSeats?: IntFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    tripDate?: XOR<TripDateScalarRelationFilter, TripDateWhereInput>
    items?: BookingItemListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    tripDateId?: SortOrder
    mobileNumber?: SortOrderInput | SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    totalSeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
    tripDate?: TripDateOrderByWithRelationInput
    items?: BookingItemOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: StringFilter<"Booking"> | string
    tripId?: IntFilter<"Booking"> | number
    tripDateId?: IntFilter<"Booking"> | number
    mobileNumber?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    totalAmount?: IntFilter<"Booking"> | number
    totalSeats?: IntFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    tripDate?: XOR<TripDateScalarRelationFilter, TripDateWhereInput>
    items?: BookingItemListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    tripDateId?: SortOrder
    mobileNumber?: SortOrderInput | SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    totalSeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    userId?: StringWithAggregatesFilter<"Booking"> | string
    tripId?: IntWithAggregatesFilter<"Booking"> | number
    tripDateId?: IntWithAggregatesFilter<"Booking"> | number
    mobileNumber?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    totalAmount?: IntWithAggregatesFilter<"Booking"> | number
    totalSeats?: IntWithAggregatesFilter<"Booking"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    userId?: StringFilter<"Review"> | string
    tourId?: IntFilter<"Review"> | number
    review?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    tourId?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tour?: TourOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_tourId?: ReviewUserIdTourIdCompoundUniqueInput
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    userId?: StringFilter<"Review"> | string
    tourId?: IntFilter<"Review"> | number
    review?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id" | "userId_tourId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    tourId?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    userId?: StringWithAggregatesFilter<"Review"> | string
    tourId?: IntWithAggregatesFilter<"Review"> | number
    review?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type TourWhereInput = {
    AND?: TourWhereInput | TourWhereInput[]
    OR?: TourWhereInput[]
    NOT?: TourWhereInput | TourWhereInput[]
    id?: IntFilter<"Tour"> | number
    title?: StringFilter<"Tour"> | string
    slug?: StringFilter<"Tour"> | string
    about?: StringFilter<"Tour"> | string
    thumbnailImageUrl?: StringFilter<"Tour"> | string
    thumbnailVideoUrl?: StringNullableFilter<"Tour"> | string | null
    cardImageUrl?: StringFilter<"Tour"> | string
    tourTypeId?: IntFilter<"Tour"> | number
    isActive?: BoolFilter<"Tour"> | boolean
    isFeatured?: BoolFilter<"Tour"> | boolean
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    updatedAt?: DateTimeFilter<"Tour"> | Date | string
    reviews?: ReviewListRelationFilter
    trips?: TripListRelationFilter
    faq?: FaqListRelationFilter
    tourType?: XOR<TourTypeScalarRelationFilter, TourTypeWhereInput>
  }

  export type TourOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    about?: SortOrder
    thumbnailImageUrl?: SortOrder
    thumbnailVideoUrl?: SortOrderInput | SortOrder
    cardImageUrl?: SortOrder
    tourTypeId?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    trips?: TripOrderByRelationAggregateInput
    faq?: FaqOrderByRelationAggregateInput
    tourType?: TourTypeOrderByWithRelationInput
  }

  export type TourWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    slug?: string
    AND?: TourWhereInput | TourWhereInput[]
    OR?: TourWhereInput[]
    NOT?: TourWhereInput | TourWhereInput[]
    about?: StringFilter<"Tour"> | string
    thumbnailImageUrl?: StringFilter<"Tour"> | string
    thumbnailVideoUrl?: StringNullableFilter<"Tour"> | string | null
    cardImageUrl?: StringFilter<"Tour"> | string
    tourTypeId?: IntFilter<"Tour"> | number
    isActive?: BoolFilter<"Tour"> | boolean
    isFeatured?: BoolFilter<"Tour"> | boolean
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    updatedAt?: DateTimeFilter<"Tour"> | Date | string
    reviews?: ReviewListRelationFilter
    trips?: TripListRelationFilter
    faq?: FaqListRelationFilter
    tourType?: XOR<TourTypeScalarRelationFilter, TourTypeWhereInput>
  }, "id" | "title" | "slug">

  export type TourOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    about?: SortOrder
    thumbnailImageUrl?: SortOrder
    thumbnailVideoUrl?: SortOrderInput | SortOrder
    cardImageUrl?: SortOrder
    tourTypeId?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TourCountOrderByAggregateInput
    _avg?: TourAvgOrderByAggregateInput
    _max?: TourMaxOrderByAggregateInput
    _min?: TourMinOrderByAggregateInput
    _sum?: TourSumOrderByAggregateInput
  }

  export type TourScalarWhereWithAggregatesInput = {
    AND?: TourScalarWhereWithAggregatesInput | TourScalarWhereWithAggregatesInput[]
    OR?: TourScalarWhereWithAggregatesInput[]
    NOT?: TourScalarWhereWithAggregatesInput | TourScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tour"> | number
    title?: StringWithAggregatesFilter<"Tour"> | string
    slug?: StringWithAggregatesFilter<"Tour"> | string
    about?: StringWithAggregatesFilter<"Tour"> | string
    thumbnailImageUrl?: StringWithAggregatesFilter<"Tour"> | string
    thumbnailVideoUrl?: StringNullableWithAggregatesFilter<"Tour"> | string | null
    cardImageUrl?: StringWithAggregatesFilter<"Tour"> | string
    tourTypeId?: IntWithAggregatesFilter<"Tour"> | number
    isActive?: BoolWithAggregatesFilter<"Tour"> | boolean
    isFeatured?: BoolWithAggregatesFilter<"Tour"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Tour"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tour"> | Date | string
  }

  export type TourTypeWhereInput = {
    AND?: TourTypeWhereInput | TourTypeWhereInput[]
    OR?: TourTypeWhereInput[]
    NOT?: TourTypeWhereInput | TourTypeWhereInput[]
    id?: IntFilter<"TourType"> | number
    createdAt?: DateTimeFilter<"TourType"> | Date | string
    updatedAt?: DateTimeFilter<"TourType"> | Date | string
    title?: StringFilter<"TourType"> | string
    slug?: StringFilter<"TourType"> | string
    description?: StringNullableFilter<"TourType"> | string | null
    isActive?: BoolFilter<"TourType"> | boolean
    priority?: IntFilter<"TourType"> | number
    tours?: TourListRelationFilter
  }

  export type TourTypeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    priority?: SortOrder
    tours?: TourOrderByRelationAggregateInput
  }

  export type TourTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    slug?: string
    AND?: TourTypeWhereInput | TourTypeWhereInput[]
    OR?: TourTypeWhereInput[]
    NOT?: TourTypeWhereInput | TourTypeWhereInput[]
    createdAt?: DateTimeFilter<"TourType"> | Date | string
    updatedAt?: DateTimeFilter<"TourType"> | Date | string
    description?: StringNullableFilter<"TourType"> | string | null
    isActive?: BoolFilter<"TourType"> | boolean
    priority?: IntFilter<"TourType"> | number
    tours?: TourListRelationFilter
  }, "id" | "title" | "slug">

  export type TourTypeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    priority?: SortOrder
    _count?: TourTypeCountOrderByAggregateInput
    _avg?: TourTypeAvgOrderByAggregateInput
    _max?: TourTypeMaxOrderByAggregateInput
    _min?: TourTypeMinOrderByAggregateInput
    _sum?: TourTypeSumOrderByAggregateInput
  }

  export type TourTypeScalarWhereWithAggregatesInput = {
    AND?: TourTypeScalarWhereWithAggregatesInput | TourTypeScalarWhereWithAggregatesInput[]
    OR?: TourTypeScalarWhereWithAggregatesInput[]
    NOT?: TourTypeScalarWhereWithAggregatesInput | TourTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TourType"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TourType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TourType"> | Date | string
    title?: StringWithAggregatesFilter<"TourType"> | string
    slug?: StringWithAggregatesFilter<"TourType"> | string
    description?: StringNullableWithAggregatesFilter<"TourType"> | string | null
    isActive?: BoolWithAggregatesFilter<"TourType"> | boolean
    priority?: IntWithAggregatesFilter<"TourType"> | number
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: IntFilter<"Trip"> | number
    categoryId?: IntFilter<"Trip"> | number
    tourId?: IntFilter<"Trip"> | number
    thumbnailImageUrl?: StringFilter<"Trip"> | string
    thumbnailVideoUrl?: StringFilter<"Trip"> | string
    cardImageUrl?: StringFilter<"Trip"> | string
    isFeature?: BoolFilter<"Trip"> | boolean
    title?: StringFilter<"Trip"> | string
    slug?: StringFilter<"Trip"> | string
    inclusion?: StringFilter<"Trip"> | string
    exclusion?: StringFilter<"Trip"> | string
    notes?: StringFilter<"Trip"> | string
    startingPrice?: IntFilter<"Trip"> | number
    ItineraryLink?: StringFilter<"Trip"> | string
    ItineraryImageUrl?: StringFilter<"Trip"> | string
    About?: StringFilter<"Trip"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
    Itinerary?: ItineraryListRelationFilter
    TripDate?: TripDateListRelationFilter
    bookingSession?: BookingSessionListRelationFilter
    Booking?: BookingListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    tourId?: SortOrder
    thumbnailImageUrl?: SortOrder
    thumbnailVideoUrl?: SortOrder
    cardImageUrl?: SortOrder
    isFeature?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    inclusion?: SortOrder
    exclusion?: SortOrder
    notes?: SortOrder
    startingPrice?: SortOrder
    ItineraryLink?: SortOrder
    ItineraryImageUrl?: SortOrder
    About?: SortOrder
    category?: CategoryOrderByWithRelationInput
    tour?: TourOrderByWithRelationInput
    Itinerary?: ItineraryOrderByRelationAggregateInput
    TripDate?: TripDateOrderByRelationAggregateInput
    bookingSession?: BookingSessionOrderByRelationAggregateInput
    Booking?: BookingOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    categoryId?: IntFilter<"Trip"> | number
    tourId?: IntFilter<"Trip"> | number
    thumbnailImageUrl?: StringFilter<"Trip"> | string
    thumbnailVideoUrl?: StringFilter<"Trip"> | string
    cardImageUrl?: StringFilter<"Trip"> | string
    isFeature?: BoolFilter<"Trip"> | boolean
    title?: StringFilter<"Trip"> | string
    inclusion?: StringFilter<"Trip"> | string
    exclusion?: StringFilter<"Trip"> | string
    notes?: StringFilter<"Trip"> | string
    startingPrice?: IntFilter<"Trip"> | number
    ItineraryLink?: StringFilter<"Trip"> | string
    ItineraryImageUrl?: StringFilter<"Trip"> | string
    About?: StringFilter<"Trip"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
    Itinerary?: ItineraryListRelationFilter
    TripDate?: TripDateListRelationFilter
    bookingSession?: BookingSessionListRelationFilter
    Booking?: BookingListRelationFilter
  }, "id" | "slug">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    tourId?: SortOrder
    thumbnailImageUrl?: SortOrder
    thumbnailVideoUrl?: SortOrder
    cardImageUrl?: SortOrder
    isFeature?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    inclusion?: SortOrder
    exclusion?: SortOrder
    notes?: SortOrder
    startingPrice?: SortOrder
    ItineraryLink?: SortOrder
    ItineraryImageUrl?: SortOrder
    About?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trip"> | number
    categoryId?: IntWithAggregatesFilter<"Trip"> | number
    tourId?: IntWithAggregatesFilter<"Trip"> | number
    thumbnailImageUrl?: StringWithAggregatesFilter<"Trip"> | string
    thumbnailVideoUrl?: StringWithAggregatesFilter<"Trip"> | string
    cardImageUrl?: StringWithAggregatesFilter<"Trip"> | string
    isFeature?: BoolWithAggregatesFilter<"Trip"> | boolean
    title?: StringWithAggregatesFilter<"Trip"> | string
    slug?: StringWithAggregatesFilter<"Trip"> | string
    inclusion?: StringWithAggregatesFilter<"Trip"> | string
    exclusion?: StringWithAggregatesFilter<"Trip"> | string
    notes?: StringWithAggregatesFilter<"Trip"> | string
    startingPrice?: IntWithAggregatesFilter<"Trip"> | number
    ItineraryLink?: StringWithAggregatesFilter<"Trip"> | string
    ItineraryImageUrl?: StringWithAggregatesFilter<"Trip"> | string
    About?: StringWithAggregatesFilter<"Trip"> | string
  }

  export type TripDateWhereInput = {
    AND?: TripDateWhereInput | TripDateWhereInput[]
    OR?: TripDateWhereInput[]
    NOT?: TripDateWhereInput | TripDateWhereInput[]
    id?: IntFilter<"TripDate"> | number
    tripId?: IntFilter<"TripDate"> | number
    startDate?: DateTimeFilter<"TripDate"> | Date | string
    endDate?: DateTimeFilter<"TripDate"> | Date | string
    createdAt?: DateTimeFilter<"TripDate"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    booking?: BookingListRelationFilter
    pricing?: TripPricingListRelationFilter
    bookingSession?: BookingSessionListRelationFilter
  }

  export type TripDateOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    trip?: TripOrderByWithRelationInput
    booking?: BookingOrderByRelationAggregateInput
    pricing?: TripPricingOrderByRelationAggregateInput
    bookingSession?: BookingSessionOrderByRelationAggregateInput
  }

  export type TripDateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TripDateWhereInput | TripDateWhereInput[]
    OR?: TripDateWhereInput[]
    NOT?: TripDateWhereInput | TripDateWhereInput[]
    tripId?: IntFilter<"TripDate"> | number
    startDate?: DateTimeFilter<"TripDate"> | Date | string
    endDate?: DateTimeFilter<"TripDate"> | Date | string
    createdAt?: DateTimeFilter<"TripDate"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    booking?: BookingListRelationFilter
    pricing?: TripPricingListRelationFilter
    bookingSession?: BookingSessionListRelationFilter
  }, "id">

  export type TripDateOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    _count?: TripDateCountOrderByAggregateInput
    _avg?: TripDateAvgOrderByAggregateInput
    _max?: TripDateMaxOrderByAggregateInput
    _min?: TripDateMinOrderByAggregateInput
    _sum?: TripDateSumOrderByAggregateInput
  }

  export type TripDateScalarWhereWithAggregatesInput = {
    AND?: TripDateScalarWhereWithAggregatesInput | TripDateScalarWhereWithAggregatesInput[]
    OR?: TripDateScalarWhereWithAggregatesInput[]
    NOT?: TripDateScalarWhereWithAggregatesInput | TripDateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TripDate"> | number
    tripId?: IntWithAggregatesFilter<"TripDate"> | number
    startDate?: DateTimeWithAggregatesFilter<"TripDate"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"TripDate"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"TripDate"> | Date | string
  }

  export type ItineraryWhereInput = {
    AND?: ItineraryWhereInput | ItineraryWhereInput[]
    OR?: ItineraryWhereInput[]
    NOT?: ItineraryWhereInput | ItineraryWhereInput[]
    id?: IntFilter<"Itinerary"> | number
    tripId?: IntFilter<"Itinerary"> | number
    title?: StringFilter<"Itinerary"> | string
    description?: StringFilter<"Itinerary"> | string
    dayNumber?: IntFilter<"Itinerary"> | number
    createdAt?: DateTimeFilter<"Itinerary"> | Date | string
    updatedAt?: DateTimeFilter<"Itinerary"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type ItineraryOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dayNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type ItineraryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tripId_dayNumber?: ItineraryTripIdDayNumberCompoundUniqueInput
    AND?: ItineraryWhereInput | ItineraryWhereInput[]
    OR?: ItineraryWhereInput[]
    NOT?: ItineraryWhereInput | ItineraryWhereInput[]
    tripId?: IntFilter<"Itinerary"> | number
    title?: StringFilter<"Itinerary"> | string
    description?: StringFilter<"Itinerary"> | string
    dayNumber?: IntFilter<"Itinerary"> | number
    createdAt?: DateTimeFilter<"Itinerary"> | Date | string
    updatedAt?: DateTimeFilter<"Itinerary"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id" | "tripId_dayNumber">

  export type ItineraryOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dayNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItineraryCountOrderByAggregateInput
    _avg?: ItineraryAvgOrderByAggregateInput
    _max?: ItineraryMaxOrderByAggregateInput
    _min?: ItineraryMinOrderByAggregateInput
    _sum?: ItinerarySumOrderByAggregateInput
  }

  export type ItineraryScalarWhereWithAggregatesInput = {
    AND?: ItineraryScalarWhereWithAggregatesInput | ItineraryScalarWhereWithAggregatesInput[]
    OR?: ItineraryScalarWhereWithAggregatesInput[]
    NOT?: ItineraryScalarWhereWithAggregatesInput | ItineraryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Itinerary"> | number
    tripId?: IntWithAggregatesFilter<"Itinerary"> | number
    title?: StringWithAggregatesFilter<"Itinerary"> | string
    description?: StringWithAggregatesFilter<"Itinerary"> | string
    dayNumber?: IntWithAggregatesFilter<"Itinerary"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Itinerary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Itinerary"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    slug?: StringFilter<"Category"> | string
    title?: StringFilter<"Category"> | string
    trip?: TripListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    trip?: TripOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    title?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    trip?: TripListRelationFilter
  }, "id" | "slug" | "title">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    slug?: StringWithAggregatesFilter<"Category"> | string
    title?: StringWithAggregatesFilter<"Category"> | string
  }

  export type VibeVideoWhereInput = {
    AND?: VibeVideoWhereInput | VibeVideoWhereInput[]
    OR?: VibeVideoWhereInput[]
    NOT?: VibeVideoWhereInput | VibeVideoWhereInput[]
    id?: IntFilter<"VibeVideo"> | number
    url?: StringFilter<"VibeVideo"> | string
    title?: StringNullableFilter<"VibeVideo"> | string | null
    order?: IntNullableFilter<"VibeVideo"> | number | null
  }

  export type VibeVideoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
  }

  export type VibeVideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VibeVideoWhereInput | VibeVideoWhereInput[]
    OR?: VibeVideoWhereInput[]
    NOT?: VibeVideoWhereInput | VibeVideoWhereInput[]
    url?: StringFilter<"VibeVideo"> | string
    title?: StringNullableFilter<"VibeVideo"> | string | null
    order?: IntNullableFilter<"VibeVideo"> | number | null
  }, "id">

  export type VibeVideoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    _count?: VibeVideoCountOrderByAggregateInput
    _avg?: VibeVideoAvgOrderByAggregateInput
    _max?: VibeVideoMaxOrderByAggregateInput
    _min?: VibeVideoMinOrderByAggregateInput
    _sum?: VibeVideoSumOrderByAggregateInput
  }

  export type VibeVideoScalarWhereWithAggregatesInput = {
    AND?: VibeVideoScalarWhereWithAggregatesInput | VibeVideoScalarWhereWithAggregatesInput[]
    OR?: VibeVideoScalarWhereWithAggregatesInput[]
    NOT?: VibeVideoScalarWhereWithAggregatesInput | VibeVideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VibeVideo"> | number
    url?: StringWithAggregatesFilter<"VibeVideo"> | string
    title?: StringNullableWithAggregatesFilter<"VibeVideo"> | string | null
    order?: IntNullableWithAggregatesFilter<"VibeVideo"> | number | null
  }

  export type TripPricingWhereInput = {
    AND?: TripPricingWhereInput | TripPricingWhereInput[]
    OR?: TripPricingWhereInput[]
    NOT?: TripPricingWhereInput | TripPricingWhereInput[]
    id?: IntFilter<"TripPricing"> | number
    tripDateId?: IntFilter<"TripPricing"> | number
    sharing?: EnumSharingTypeFilter<"TripPricing"> | $Enums.SharingType
    price?: IntFilter<"TripPricing"> | number
    tripDate?: XOR<TripDateScalarRelationFilter, TripDateWhereInput>
  }

  export type TripPricingOrderByWithRelationInput = {
    id?: SortOrder
    tripDateId?: SortOrder
    sharing?: SortOrder
    price?: SortOrder
    tripDate?: TripDateOrderByWithRelationInput
  }

  export type TripPricingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tripDateId_sharing?: TripPricingTripDateIdSharingCompoundUniqueInput
    AND?: TripPricingWhereInput | TripPricingWhereInput[]
    OR?: TripPricingWhereInput[]
    NOT?: TripPricingWhereInput | TripPricingWhereInput[]
    tripDateId?: IntFilter<"TripPricing"> | number
    sharing?: EnumSharingTypeFilter<"TripPricing"> | $Enums.SharingType
    price?: IntFilter<"TripPricing"> | number
    tripDate?: XOR<TripDateScalarRelationFilter, TripDateWhereInput>
  }, "id" | "tripDateId_sharing">

  export type TripPricingOrderByWithAggregationInput = {
    id?: SortOrder
    tripDateId?: SortOrder
    sharing?: SortOrder
    price?: SortOrder
    _count?: TripPricingCountOrderByAggregateInput
    _avg?: TripPricingAvgOrderByAggregateInput
    _max?: TripPricingMaxOrderByAggregateInput
    _min?: TripPricingMinOrderByAggregateInput
    _sum?: TripPricingSumOrderByAggregateInput
  }

  export type TripPricingScalarWhereWithAggregatesInput = {
    AND?: TripPricingScalarWhereWithAggregatesInput | TripPricingScalarWhereWithAggregatesInput[]
    OR?: TripPricingScalarWhereWithAggregatesInput[]
    NOT?: TripPricingScalarWhereWithAggregatesInput | TripPricingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TripPricing"> | number
    tripDateId?: IntWithAggregatesFilter<"TripPricing"> | number
    sharing?: EnumSharingTypeWithAggregatesFilter<"TripPricing"> | $Enums.SharingType
    price?: IntWithAggregatesFilter<"TripPricing"> | number
  }

  export type FaqWhereInput = {
    AND?: FaqWhereInput | FaqWhereInput[]
    OR?: FaqWhereInput[]
    NOT?: FaqWhereInput | FaqWhereInput[]
    id?: IntFilter<"Faq"> | number
    tourId?: IntFilter<"Faq"> | number
    question?: StringFilter<"Faq"> | string
    answer?: StringFilter<"Faq"> | string
    createdAt?: DateTimeFilter<"Faq"> | Date | string
    updatedAt?: DateTimeFilter<"Faq"> | Date | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type FaqOrderByWithRelationInput = {
    id?: SortOrder
    tourId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tour?: TourOrderByWithRelationInput
  }

  export type FaqWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FaqWhereInput | FaqWhereInput[]
    OR?: FaqWhereInput[]
    NOT?: FaqWhereInput | FaqWhereInput[]
    tourId?: IntFilter<"Faq"> | number
    question?: StringFilter<"Faq"> | string
    answer?: StringFilter<"Faq"> | string
    createdAt?: DateTimeFilter<"Faq"> | Date | string
    updatedAt?: DateTimeFilter<"Faq"> | Date | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id">

  export type FaqOrderByWithAggregationInput = {
    id?: SortOrder
    tourId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FaqCountOrderByAggregateInput
    _avg?: FaqAvgOrderByAggregateInput
    _max?: FaqMaxOrderByAggregateInput
    _min?: FaqMinOrderByAggregateInput
    _sum?: FaqSumOrderByAggregateInput
  }

  export type FaqScalarWhereWithAggregatesInput = {
    AND?: FaqScalarWhereWithAggregatesInput | FaqScalarWhereWithAggregatesInput[]
    OR?: FaqScalarWhereWithAggregatesInput[]
    NOT?: FaqScalarWhereWithAggregatesInput | FaqScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Faq"> | number
    tourId?: IntWithAggregatesFilter<"Faq"> | number
    question?: StringWithAggregatesFilter<"Faq"> | string
    answer?: StringWithAggregatesFilter<"Faq"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Faq"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Faq"> | Date | string
  }

  export type BookingSessionWhereInput = {
    AND?: BookingSessionWhereInput | BookingSessionWhereInput[]
    OR?: BookingSessionWhereInput[]
    NOT?: BookingSessionWhereInput | BookingSessionWhereInput[]
    id?: StringFilter<"BookingSession"> | string
    userId?: StringFilter<"BookingSession"> | string
    tripId?: IntFilter<"BookingSession"> | number
    tripDateId?: IntFilter<"BookingSession"> | number
    seatCount?: IntFilter<"BookingSession"> | number
    status?: EnumBookingSessionStatusFilter<"BookingSession"> | $Enums.BookingSessionStatus
    expiresAt?: DateTimeFilter<"BookingSession"> | Date | string
    createdAt?: DateTimeFilter<"BookingSession"> | Date | string
    updatedAt?: DateTimeFilter<"BookingSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    tripDate?: XOR<TripDateScalarRelationFilter, TripDateWhereInput>
  }

  export type BookingSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    tripDateId?: SortOrder
    seatCount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
    tripDate?: TripDateOrderByWithRelationInput
  }

  export type BookingSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingSessionWhereInput | BookingSessionWhereInput[]
    OR?: BookingSessionWhereInput[]
    NOT?: BookingSessionWhereInput | BookingSessionWhereInput[]
    userId?: StringFilter<"BookingSession"> | string
    tripId?: IntFilter<"BookingSession"> | number
    tripDateId?: IntFilter<"BookingSession"> | number
    seatCount?: IntFilter<"BookingSession"> | number
    status?: EnumBookingSessionStatusFilter<"BookingSession"> | $Enums.BookingSessionStatus
    expiresAt?: DateTimeFilter<"BookingSession"> | Date | string
    createdAt?: DateTimeFilter<"BookingSession"> | Date | string
    updatedAt?: DateTimeFilter<"BookingSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    tripDate?: XOR<TripDateScalarRelationFilter, TripDateWhereInput>
  }, "id">

  export type BookingSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    tripDateId?: SortOrder
    seatCount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingSessionCountOrderByAggregateInput
    _avg?: BookingSessionAvgOrderByAggregateInput
    _max?: BookingSessionMaxOrderByAggregateInput
    _min?: BookingSessionMinOrderByAggregateInput
    _sum?: BookingSessionSumOrderByAggregateInput
  }

  export type BookingSessionScalarWhereWithAggregatesInput = {
    AND?: BookingSessionScalarWhereWithAggregatesInput | BookingSessionScalarWhereWithAggregatesInput[]
    OR?: BookingSessionScalarWhereWithAggregatesInput[]
    NOT?: BookingSessionScalarWhereWithAggregatesInput | BookingSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookingSession"> | string
    userId?: StringWithAggregatesFilter<"BookingSession"> | string
    tripId?: IntWithAggregatesFilter<"BookingSession"> | number
    tripDateId?: IntWithAggregatesFilter<"BookingSession"> | number
    seatCount?: IntWithAggregatesFilter<"BookingSession"> | number
    status?: EnumBookingSessionStatusWithAggregatesFilter<"BookingSession"> | $Enums.BookingSessionStatus
    expiresAt?: DateTimeWithAggregatesFilter<"BookingSession"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"BookingSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BookingSession"> | Date | string
  }

  export type BookingItemWhereInput = {
    AND?: BookingItemWhereInput | BookingItemWhereInput[]
    OR?: BookingItemWhereInput[]
    NOT?: BookingItemWhereInput | BookingItemWhereInput[]
    id?: IntFilter<"BookingItem"> | number
    bookingId?: IntFilter<"BookingItem"> | number
    sharingType?: EnumSharingTypeFilter<"BookingItem"> | $Enums.SharingType
    quantity?: IntFilter<"BookingItem"> | number
    pricePerPerson?: IntFilter<"BookingItem"> | number
    subtotal?: IntFilter<"BookingItem"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type BookingItemOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    sharingType?: SortOrder
    quantity?: SortOrder
    pricePerPerson?: SortOrder
    subtotal?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type BookingItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingItemWhereInput | BookingItemWhereInput[]
    OR?: BookingItemWhereInput[]
    NOT?: BookingItemWhereInput | BookingItemWhereInput[]
    bookingId?: IntFilter<"BookingItem"> | number
    sharingType?: EnumSharingTypeFilter<"BookingItem"> | $Enums.SharingType
    quantity?: IntFilter<"BookingItem"> | number
    pricePerPerson?: IntFilter<"BookingItem"> | number
    subtotal?: IntFilter<"BookingItem"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id">

  export type BookingItemOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    sharingType?: SortOrder
    quantity?: SortOrder
    pricePerPerson?: SortOrder
    subtotal?: SortOrder
    _count?: BookingItemCountOrderByAggregateInput
    _avg?: BookingItemAvgOrderByAggregateInput
    _max?: BookingItemMaxOrderByAggregateInput
    _min?: BookingItemMinOrderByAggregateInput
    _sum?: BookingItemSumOrderByAggregateInput
  }

  export type BookingItemScalarWhereWithAggregatesInput = {
    AND?: BookingItemScalarWhereWithAggregatesInput | BookingItemScalarWhereWithAggregatesInput[]
    OR?: BookingItemScalarWhereWithAggregatesInput[]
    NOT?: BookingItemScalarWhereWithAggregatesInput | BookingItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookingItem"> | number
    bookingId?: IntWithAggregatesFilter<"BookingItem"> | number
    sharingType?: EnumSharingTypeWithAggregatesFilter<"BookingItem"> | $Enums.SharingType
    quantity?: IntWithAggregatesFilter<"BookingItem"> | number
    pricePerPerson?: IntWithAggregatesFilter<"BookingItem"> | number
    subtotal?: IntWithAggregatesFilter<"BookingItem"> | number
  }

  export type UserCreateInput = {
    id: string
    name?: string | null
    email: string
    phone?: string | null
    imageUrl?: string | null
    password?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingSession?: BookingSessionCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name?: string | null
    email: string
    phone?: string | null
    imageUrl?: string | null
    password?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingSession?: BookingSessionUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingSession?: BookingSessionUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingSession?: BookingSessionUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name?: string | null
    email: string
    phone?: string | null
    imageUrl?: string | null
    password?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    mobileNumber?: string | null
    status?: $Enums.BookingStatus
    totalAmount: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    trip: TripCreateNestedOneWithoutBookingInput
    tripDate: TripDateCreateNestedOneWithoutBookingInput
    items?: BookingItemCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    userId: string
    tripId: number
    tripDateId: number
    mobileNumber?: string | null
    status?: $Enums.BookingStatus
    totalAmount: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: BookingItemUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    trip?: TripUpdateOneRequiredWithoutBookingNestedInput
    tripDate?: TripDateUpdateOneRequiredWithoutBookingNestedInput
    items?: BookingItemUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    tripDateId?: IntFieldUpdateOperationsInput | number
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BookingItemUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: number
    userId: string
    tripId: number
    tripDateId: number
    mobileNumber?: string | null
    status?: $Enums.BookingStatus
    totalAmount: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    tripDateId?: IntFieldUpdateOperationsInput | number
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    tour: TourCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    rating: number
    userId: string
    tourId: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    tour?: TourUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tourId?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    rating: number
    userId: string
    tourId: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tourId?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourCreateInput = {
    title: string
    slug: string
    about: string
    thumbnailImageUrl: string
    thumbnailVideoUrl?: string | null
    cardImageUrl: string
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutTourInput
    trips?: TripCreateNestedManyWithoutTourInput
    faq?: FaqCreateNestedManyWithoutTourInput
    tourType: TourTypeCreateNestedOneWithoutToursInput
  }

  export type TourUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    about: string
    thumbnailImageUrl: string
    thumbnailVideoUrl?: string | null
    cardImageUrl: string
    tourTypeId: number
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    trips?: TripUncheckedCreateNestedManyWithoutTourInput
    faq?: FaqUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    trips?: TripUpdateManyWithoutTourNestedInput
    faq?: FaqUpdateManyWithoutTourNestedInput
    tourType?: TourTypeUpdateOneRequiredWithoutToursNestedInput
  }

  export type TourUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    tourTypeId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    trips?: TripUncheckedUpdateManyWithoutTourNestedInput
    faq?: FaqUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateManyInput = {
    id?: number
    title: string
    slug: string
    about: string
    thumbnailImageUrl: string
    thumbnailVideoUrl?: string | null
    cardImageUrl: string
    tourTypeId: number
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    tourTypeId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourTypeCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description?: string | null
    isActive?: boolean
    priority?: number
    tours?: TourCreateNestedManyWithoutTourTypeInput
  }

  export type TourTypeUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description?: string | null
    isActive?: boolean
    priority?: number
    tours?: TourUncheckedCreateNestedManyWithoutTourTypeInput
  }

  export type TourTypeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    tours?: TourUpdateManyWithoutTourTypeNestedInput
  }

  export type TourTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    tours?: TourUncheckedUpdateManyWithoutTourTypeNestedInput
  }

  export type TourTypeCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description?: string | null
    isActive?: boolean
    priority?: number
  }

  export type TourTypeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type TourTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type TripCreateInput = {
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
    category: CategoryCreateNestedOneWithoutTripInput
    tour: TourCreateNestedOneWithoutTripsInput
    Itinerary?: ItineraryCreateNestedManyWithoutTripInput
    TripDate?: TripDateCreateNestedManyWithoutTripInput
    bookingSession?: BookingSessionCreateNestedManyWithoutTripInput
    Booking?: BookingCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: number
    categoryId: number
    tourId: number
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
    Itinerary?: ItineraryUncheckedCreateNestedManyWithoutTripInput
    TripDate?: TripDateUncheckedCreateNestedManyWithoutTripInput
    bookingSession?: BookingSessionUncheckedCreateNestedManyWithoutTripInput
    Booking?: BookingUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutTripNestedInput
    tour?: TourUpdateOneRequiredWithoutTripsNestedInput
    Itinerary?: ItineraryUpdateManyWithoutTripNestedInput
    TripDate?: TripDateUpdateManyWithoutTripNestedInput
    bookingSession?: BookingSessionUpdateManyWithoutTripNestedInput
    Booking?: BookingUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    Itinerary?: ItineraryUncheckedUpdateManyWithoutTripNestedInput
    TripDate?: TripDateUncheckedUpdateManyWithoutTripNestedInput
    bookingSession?: BookingSessionUncheckedUpdateManyWithoutTripNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: number
    categoryId: number
    tourId: number
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
  }

  export type TripUpdateManyMutationInput = {
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
  }

  export type TripDateCreateInput = {
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    trip: TripCreateNestedOneWithoutTripDateInput
    booking?: BookingCreateNestedManyWithoutTripDateInput
    pricing?: TripPricingCreateNestedManyWithoutTripDateInput
    bookingSession?: BookingSessionCreateNestedManyWithoutTripDateInput
  }

  export type TripDateUncheckedCreateInput = {
    id?: number
    tripId: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    booking?: BookingUncheckedCreateNestedManyWithoutTripDateInput
    pricing?: TripPricingUncheckedCreateNestedManyWithoutTripDateInput
    bookingSession?: BookingSessionUncheckedCreateNestedManyWithoutTripDateInput
  }

  export type TripDateUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutTripDateNestedInput
    booking?: BookingUpdateManyWithoutTripDateNestedInput
    pricing?: TripPricingUpdateManyWithoutTripDateNestedInput
    bookingSession?: BookingSessionUpdateManyWithoutTripDateNestedInput
  }

  export type TripDateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateManyWithoutTripDateNestedInput
    pricing?: TripPricingUncheckedUpdateManyWithoutTripDateNestedInput
    bookingSession?: BookingSessionUncheckedUpdateManyWithoutTripDateNestedInput
  }

  export type TripDateCreateManyInput = {
    id?: number
    tripId: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type TripDateUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripDateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItineraryCreateInput = {
    title: string
    description: string
    dayNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutItineraryInput
  }

  export type ItineraryUncheckedCreateInput = {
    id?: number
    tripId: number
    title: string
    description: string
    dayNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItineraryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutItineraryNestedInput
  }

  export type ItineraryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItineraryCreateManyInput = {
    id?: number
    tripId: number
    title: string
    description: string
    dayNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItineraryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItineraryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    slug: string
    title: string
    trip?: TripCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    slug: string
    title: string
    trip?: TripUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    trip?: TripUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    trip?: TripUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    slug: string
    title: string
  }

  export type CategoryUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type VibeVideoCreateInput = {
    url: string
    title?: string | null
    order?: number | null
  }

  export type VibeVideoUncheckedCreateInput = {
    id?: number
    url: string
    title?: string | null
    order?: number | null
  }

  export type VibeVideoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VibeVideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VibeVideoCreateManyInput = {
    id?: number
    url: string
    title?: string | null
    order?: number | null
  }

  export type VibeVideoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VibeVideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TripPricingCreateInput = {
    sharing: $Enums.SharingType
    price: number
    tripDate: TripDateCreateNestedOneWithoutPricingInput
  }

  export type TripPricingUncheckedCreateInput = {
    id?: number
    tripDateId: number
    sharing: $Enums.SharingType
    price: number
  }

  export type TripPricingUpdateInput = {
    sharing?: EnumSharingTypeFieldUpdateOperationsInput | $Enums.SharingType
    price?: IntFieldUpdateOperationsInput | number
    tripDate?: TripDateUpdateOneRequiredWithoutPricingNestedInput
  }

  export type TripPricingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripDateId?: IntFieldUpdateOperationsInput | number
    sharing?: EnumSharingTypeFieldUpdateOperationsInput | $Enums.SharingType
    price?: IntFieldUpdateOperationsInput | number
  }

  export type TripPricingCreateManyInput = {
    id?: number
    tripDateId: number
    sharing: $Enums.SharingType
    price: number
  }

  export type TripPricingUpdateManyMutationInput = {
    sharing?: EnumSharingTypeFieldUpdateOperationsInput | $Enums.SharingType
    price?: IntFieldUpdateOperationsInput | number
  }

  export type TripPricingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripDateId?: IntFieldUpdateOperationsInput | number
    sharing?: EnumSharingTypeFieldUpdateOperationsInput | $Enums.SharingType
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FaqCreateInput = {
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tour: TourCreateNestedOneWithoutFaqInput
  }

  export type FaqUncheckedCreateInput = {
    id?: number
    tourId: number
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourUpdateOneRequiredWithoutFaqNestedInput
  }

  export type FaqUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqCreateManyInput = {
    id?: number
    tourId: number
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSessionCreateInput = {
    id?: string
    seatCount: number
    status?: $Enums.BookingSessionStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingSessionInput
    trip: TripCreateNestedOneWithoutBookingSessionInput
    tripDate: TripDateCreateNestedOneWithoutBookingSessionInput
  }

  export type BookingSessionUncheckedCreateInput = {
    id?: string
    userId: string
    tripId: number
    tripDateId: number
    seatCount: number
    status?: $Enums.BookingSessionStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingSessionStatusFieldUpdateOperationsInput | $Enums.BookingSessionStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingSessionNestedInput
    trip?: TripUpdateOneRequiredWithoutBookingSessionNestedInput
    tripDate?: TripDateUpdateOneRequiredWithoutBookingSessionNestedInput
  }

  export type BookingSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    tripDateId?: IntFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingSessionStatusFieldUpdateOperationsInput | $Enums.BookingSessionStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSessionCreateManyInput = {
    id?: string
    userId: string
    tripId: number
    tripDateId: number
    seatCount: number
    status?: $Enums.BookingSessionStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingSessionStatusFieldUpdateOperationsInput | $Enums.BookingSessionStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    tripDateId?: IntFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingSessionStatusFieldUpdateOperationsInput | $Enums.BookingSessionStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingItemCreateInput = {
    sharingType: $Enums.SharingType
    quantity: number
    pricePerPerson: number
    subtotal: number
    booking: BookingCreateNestedOneWithoutItemsInput
  }

  export type BookingItemUncheckedCreateInput = {
    id?: number
    bookingId: number
    sharingType: $Enums.SharingType
    quantity: number
    pricePerPerson: number
    subtotal: number
  }

  export type BookingItemUpdateInput = {
    sharingType?: EnumSharingTypeFieldUpdateOperationsInput | $Enums.SharingType
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerPerson?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    booking?: BookingUpdateOneRequiredWithoutItemsNestedInput
  }

  export type BookingItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    sharingType?: EnumSharingTypeFieldUpdateOperationsInput | $Enums.SharingType
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerPerson?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type BookingItemCreateManyInput = {
    id?: number
    bookingId: number
    sharingType: $Enums.SharingType
    quantity: number
    pricePerPerson: number
    subtotal: number
  }

  export type BookingItemUpdateManyMutationInput = {
    sharingType?: EnumSharingTypeFieldUpdateOperationsInput | $Enums.SharingType
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerPerson?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type BookingItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    sharingType?: EnumSharingTypeFieldUpdateOperationsInput | $Enums.SharingType
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerPerson?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookingSessionListRelationFilter = {
    every?: BookingSessionWhereInput
    some?: BookingSessionWhereInput
    none?: BookingSessionWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    imageUrl?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    imageUrl?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    imageUrl?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TripScalarRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type TripDateScalarRelationFilter = {
    is?: TripDateWhereInput
    isNot?: TripDateWhereInput
  }

  export type BookingItemListRelationFilter = {
    every?: BookingItemWhereInput
    some?: BookingItemWhereInput
    none?: BookingItemWhereInput
  }

  export type BookingItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    tripDateId?: SortOrder
    mobileNumber?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    totalSeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    tripDateId?: SortOrder
    totalAmount?: SortOrder
    totalSeats?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    tripDateId?: SortOrder
    mobileNumber?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    totalSeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    tripDateId?: SortOrder
    mobileNumber?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    totalSeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    tripDateId?: SortOrder
    totalAmount?: SortOrder
    totalSeats?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type TourScalarRelationFilter = {
    is?: TourWhereInput
    isNot?: TourWhereInput
  }

  export type ReviewUserIdTourIdCompoundUniqueInput = {
    userId: string
    tourId: number
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    tourId?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    tourId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    tourId?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    tourId?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    tourId?: SortOrder
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type FaqListRelationFilter = {
    every?: FaqWhereInput
    some?: FaqWhereInput
    none?: FaqWhereInput
  }

  export type TourTypeScalarRelationFilter = {
    is?: TourTypeWhereInput
    isNot?: TourTypeWhereInput
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FaqOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    about?: SortOrder
    thumbnailImageUrl?: SortOrder
    thumbnailVideoUrl?: SortOrder
    cardImageUrl?: SortOrder
    tourTypeId?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourAvgOrderByAggregateInput = {
    id?: SortOrder
    tourTypeId?: SortOrder
  }

  export type TourMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    about?: SortOrder
    thumbnailImageUrl?: SortOrder
    thumbnailVideoUrl?: SortOrder
    cardImageUrl?: SortOrder
    tourTypeId?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    about?: SortOrder
    thumbnailImageUrl?: SortOrder
    thumbnailVideoUrl?: SortOrder
    cardImageUrl?: SortOrder
    tourTypeId?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourSumOrderByAggregateInput = {
    id?: SortOrder
    tourTypeId?: SortOrder
  }

  export type TourListRelationFilter = {
    every?: TourWhereInput
    some?: TourWhereInput
    none?: TourWhereInput
  }

  export type TourOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourTypeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    priority?: SortOrder
  }

  export type TourTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
  }

  export type TourTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    priority?: SortOrder
  }

  export type TourTypeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    priority?: SortOrder
  }

  export type TourTypeSumOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ItineraryListRelationFilter = {
    every?: ItineraryWhereInput
    some?: ItineraryWhereInput
    none?: ItineraryWhereInput
  }

  export type TripDateListRelationFilter = {
    every?: TripDateWhereInput
    some?: TripDateWhereInput
    none?: TripDateWhereInput
  }

  export type ItineraryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripDateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    tourId?: SortOrder
    thumbnailImageUrl?: SortOrder
    thumbnailVideoUrl?: SortOrder
    cardImageUrl?: SortOrder
    isFeature?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    inclusion?: SortOrder
    exclusion?: SortOrder
    notes?: SortOrder
    startingPrice?: SortOrder
    ItineraryLink?: SortOrder
    ItineraryImageUrl?: SortOrder
    About?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    tourId?: SortOrder
    startingPrice?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    tourId?: SortOrder
    thumbnailImageUrl?: SortOrder
    thumbnailVideoUrl?: SortOrder
    cardImageUrl?: SortOrder
    isFeature?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    inclusion?: SortOrder
    exclusion?: SortOrder
    notes?: SortOrder
    startingPrice?: SortOrder
    ItineraryLink?: SortOrder
    ItineraryImageUrl?: SortOrder
    About?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    tourId?: SortOrder
    thumbnailImageUrl?: SortOrder
    thumbnailVideoUrl?: SortOrder
    cardImageUrl?: SortOrder
    isFeature?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    inclusion?: SortOrder
    exclusion?: SortOrder
    notes?: SortOrder
    startingPrice?: SortOrder
    ItineraryLink?: SortOrder
    ItineraryImageUrl?: SortOrder
    About?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    tourId?: SortOrder
    startingPrice?: SortOrder
  }

  export type TripPricingListRelationFilter = {
    every?: TripPricingWhereInput
    some?: TripPricingWhereInput
    none?: TripPricingWhereInput
  }

  export type TripPricingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripDateCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type TripDateAvgOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
  }

  export type TripDateMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type TripDateMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type TripDateSumOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
  }

  export type ItineraryTripIdDayNumberCompoundUniqueInput = {
    tripId: number
    dayNumber: number
  }

  export type ItineraryCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dayNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItineraryAvgOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    dayNumber?: SortOrder
  }

  export type ItineraryMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dayNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItineraryMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dayNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItinerarySumOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    dayNumber?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VibeVideoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    order?: SortOrder
  }

  export type VibeVideoAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type VibeVideoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    order?: SortOrder
  }

  export type VibeVideoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    order?: SortOrder
  }

  export type VibeVideoSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSharingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SharingType | EnumSharingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SharingType[] | ListEnumSharingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SharingType[] | ListEnumSharingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSharingTypeFilter<$PrismaModel> | $Enums.SharingType
  }

  export type TripPricingTripDateIdSharingCompoundUniqueInput = {
    tripDateId: number
    sharing: $Enums.SharingType
  }

  export type TripPricingCountOrderByAggregateInput = {
    id?: SortOrder
    tripDateId?: SortOrder
    sharing?: SortOrder
    price?: SortOrder
  }

  export type TripPricingAvgOrderByAggregateInput = {
    id?: SortOrder
    tripDateId?: SortOrder
    price?: SortOrder
  }

  export type TripPricingMaxOrderByAggregateInput = {
    id?: SortOrder
    tripDateId?: SortOrder
    sharing?: SortOrder
    price?: SortOrder
  }

  export type TripPricingMinOrderByAggregateInput = {
    id?: SortOrder
    tripDateId?: SortOrder
    sharing?: SortOrder
    price?: SortOrder
  }

  export type TripPricingSumOrderByAggregateInput = {
    id?: SortOrder
    tripDateId?: SortOrder
    price?: SortOrder
  }

  export type EnumSharingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SharingType | EnumSharingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SharingType[] | ListEnumSharingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SharingType[] | ListEnumSharingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSharingTypeWithAggregatesFilter<$PrismaModel> | $Enums.SharingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSharingTypeFilter<$PrismaModel>
    _max?: NestedEnumSharingTypeFilter<$PrismaModel>
  }

  export type FaqCountOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqAvgOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
  }

  export type FaqMaxOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqMinOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqSumOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
  }

  export type EnumBookingSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingSessionStatus | EnumBookingSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingSessionStatus[] | ListEnumBookingSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingSessionStatus[] | ListEnumBookingSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingSessionStatusFilter<$PrismaModel> | $Enums.BookingSessionStatus
  }

  export type BookingSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    tripDateId?: SortOrder
    seatCount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSessionAvgOrderByAggregateInput = {
    tripId?: SortOrder
    tripDateId?: SortOrder
    seatCount?: SortOrder
  }

  export type BookingSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    tripDateId?: SortOrder
    seatCount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    tripDateId?: SortOrder
    seatCount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSessionSumOrderByAggregateInput = {
    tripId?: SortOrder
    tripDateId?: SortOrder
    seatCount?: SortOrder
  }

  export type EnumBookingSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingSessionStatus | EnumBookingSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingSessionStatus[] | ListEnumBookingSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingSessionStatus[] | ListEnumBookingSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingSessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingSessionStatusFilter<$PrismaModel>
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type BookingItemCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    sharingType?: SortOrder
    quantity?: SortOrder
    pricePerPerson?: SortOrder
    subtotal?: SortOrder
  }

  export type BookingItemAvgOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    quantity?: SortOrder
    pricePerPerson?: SortOrder
    subtotal?: SortOrder
  }

  export type BookingItemMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    sharingType?: SortOrder
    quantity?: SortOrder
    pricePerPerson?: SortOrder
    subtotal?: SortOrder
  }

  export type BookingItemMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    sharingType?: SortOrder
    quantity?: SortOrder
    pricePerPerson?: SortOrder
    subtotal?: SortOrder
  }

  export type BookingItemSumOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    quantity?: SortOrder
    pricePerPerson?: SortOrder
    subtotal?: SortOrder
  }

  export type BookingSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingSessionCreateWithoutUserInput, BookingSessionUncheckedCreateWithoutUserInput> | BookingSessionCreateWithoutUserInput[] | BookingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingSessionCreateOrConnectWithoutUserInput | BookingSessionCreateOrConnectWithoutUserInput[]
    createMany?: BookingSessionCreateManyUserInputEnvelope
    connect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingSessionCreateWithoutUserInput, BookingSessionUncheckedCreateWithoutUserInput> | BookingSessionCreateWithoutUserInput[] | BookingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingSessionCreateOrConnectWithoutUserInput | BookingSessionCreateOrConnectWithoutUserInput[]
    createMany?: BookingSessionCreateManyUserInputEnvelope
    connect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingSessionCreateWithoutUserInput, BookingSessionUncheckedCreateWithoutUserInput> | BookingSessionCreateWithoutUserInput[] | BookingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingSessionCreateOrConnectWithoutUserInput | BookingSessionCreateOrConnectWithoutUserInput[]
    upsert?: BookingSessionUpsertWithWhereUniqueWithoutUserInput | BookingSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingSessionCreateManyUserInputEnvelope
    set?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    disconnect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    delete?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    connect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    update?: BookingSessionUpdateWithWhereUniqueWithoutUserInput | BookingSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingSessionUpdateManyWithWhereWithoutUserInput | BookingSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingSessionScalarWhereInput | BookingSessionScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingSessionCreateWithoutUserInput, BookingSessionUncheckedCreateWithoutUserInput> | BookingSessionCreateWithoutUserInput[] | BookingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingSessionCreateOrConnectWithoutUserInput | BookingSessionCreateOrConnectWithoutUserInput[]
    upsert?: BookingSessionUpsertWithWhereUniqueWithoutUserInput | BookingSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingSessionCreateManyUserInputEnvelope
    set?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    disconnect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    delete?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    connect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    update?: BookingSessionUpdateWithWhereUniqueWithoutUserInput | BookingSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingSessionUpdateManyWithWhereWithoutUserInput | BookingSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingSessionScalarWhereInput | BookingSessionScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutBookingInput = {
    create?: XOR<TripCreateWithoutBookingInput, TripUncheckedCreateWithoutBookingInput>
    connectOrCreate?: TripCreateOrConnectWithoutBookingInput
    connect?: TripWhereUniqueInput
  }

  export type TripDateCreateNestedOneWithoutBookingInput = {
    create?: XOR<TripDateCreateWithoutBookingInput, TripDateUncheckedCreateWithoutBookingInput>
    connectOrCreate?: TripDateCreateOrConnectWithoutBookingInput
    connect?: TripDateWhereUniqueInput
  }

  export type BookingItemCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingItemCreateWithoutBookingInput, BookingItemUncheckedCreateWithoutBookingInput> | BookingItemCreateWithoutBookingInput[] | BookingItemUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingItemCreateOrConnectWithoutBookingInput | BookingItemCreateOrConnectWithoutBookingInput[]
    createMany?: BookingItemCreateManyBookingInputEnvelope
    connect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
  }

  export type BookingItemUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingItemCreateWithoutBookingInput, BookingItemUncheckedCreateWithoutBookingInput> | BookingItemCreateWithoutBookingInput[] | BookingItemUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingItemCreateOrConnectWithoutBookingInput | BookingItemCreateOrConnectWithoutBookingInput[]
    createMany?: BookingItemCreateManyBookingInputEnvelope
    connect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type TripUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<TripCreateWithoutBookingInput, TripUncheckedCreateWithoutBookingInput>
    connectOrCreate?: TripCreateOrConnectWithoutBookingInput
    upsert?: TripUpsertWithoutBookingInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutBookingInput, TripUpdateWithoutBookingInput>, TripUncheckedUpdateWithoutBookingInput>
  }

  export type TripDateUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<TripDateCreateWithoutBookingInput, TripDateUncheckedCreateWithoutBookingInput>
    connectOrCreate?: TripDateCreateOrConnectWithoutBookingInput
    upsert?: TripDateUpsertWithoutBookingInput
    connect?: TripDateWhereUniqueInput
    update?: XOR<XOR<TripDateUpdateToOneWithWhereWithoutBookingInput, TripDateUpdateWithoutBookingInput>, TripDateUncheckedUpdateWithoutBookingInput>
  }

  export type BookingItemUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingItemCreateWithoutBookingInput, BookingItemUncheckedCreateWithoutBookingInput> | BookingItemCreateWithoutBookingInput[] | BookingItemUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingItemCreateOrConnectWithoutBookingInput | BookingItemCreateOrConnectWithoutBookingInput[]
    upsert?: BookingItemUpsertWithWhereUniqueWithoutBookingInput | BookingItemUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingItemCreateManyBookingInputEnvelope
    set?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    disconnect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    delete?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    connect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    update?: BookingItemUpdateWithWhereUniqueWithoutBookingInput | BookingItemUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingItemUpdateManyWithWhereWithoutBookingInput | BookingItemUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingItemScalarWhereInput | BookingItemScalarWhereInput[]
  }

  export type BookingItemUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingItemCreateWithoutBookingInput, BookingItemUncheckedCreateWithoutBookingInput> | BookingItemCreateWithoutBookingInput[] | BookingItemUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingItemCreateOrConnectWithoutBookingInput | BookingItemCreateOrConnectWithoutBookingInput[]
    upsert?: BookingItemUpsertWithWhereUniqueWithoutBookingInput | BookingItemUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingItemCreateManyBookingInputEnvelope
    set?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    disconnect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    delete?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    connect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    update?: BookingItemUpdateWithWhereUniqueWithoutBookingInput | BookingItemUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingItemUpdateManyWithWhereWithoutBookingInput | BookingItemUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingItemScalarWhereInput | BookingItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type TourCreateNestedOneWithoutReviewsInput = {
    create?: XOR<TourCreateWithoutReviewsInput, TourUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TourCreateOrConnectWithoutReviewsInput
    connect?: TourWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type TourUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<TourCreateWithoutReviewsInput, TourUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TourCreateOrConnectWithoutReviewsInput
    upsert?: TourUpsertWithoutReviewsInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutReviewsInput, TourUpdateWithoutReviewsInput>, TourUncheckedUpdateWithoutReviewsInput>
  }

  export type ReviewCreateNestedManyWithoutTourInput = {
    create?: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput> | ReviewCreateWithoutTourInput[] | ReviewUncheckedCreateWithoutTourInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTourInput | ReviewCreateOrConnectWithoutTourInput[]
    createMany?: ReviewCreateManyTourInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TripCreateNestedManyWithoutTourInput = {
    create?: XOR<TripCreateWithoutTourInput, TripUncheckedCreateWithoutTourInput> | TripCreateWithoutTourInput[] | TripUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TripCreateOrConnectWithoutTourInput | TripCreateOrConnectWithoutTourInput[]
    createMany?: TripCreateManyTourInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type FaqCreateNestedManyWithoutTourInput = {
    create?: XOR<FaqCreateWithoutTourInput, FaqUncheckedCreateWithoutTourInput> | FaqCreateWithoutTourInput[] | FaqUncheckedCreateWithoutTourInput[]
    connectOrCreate?: FaqCreateOrConnectWithoutTourInput | FaqCreateOrConnectWithoutTourInput[]
    createMany?: FaqCreateManyTourInputEnvelope
    connect?: FaqWhereUniqueInput | FaqWhereUniqueInput[]
  }

  export type TourTypeCreateNestedOneWithoutToursInput = {
    create?: XOR<TourTypeCreateWithoutToursInput, TourTypeUncheckedCreateWithoutToursInput>
    connectOrCreate?: TourTypeCreateOrConnectWithoutToursInput
    connect?: TourTypeWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput> | ReviewCreateWithoutTourInput[] | ReviewUncheckedCreateWithoutTourInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTourInput | ReviewCreateOrConnectWithoutTourInput[]
    createMany?: ReviewCreateManyTourInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<TripCreateWithoutTourInput, TripUncheckedCreateWithoutTourInput> | TripCreateWithoutTourInput[] | TripUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TripCreateOrConnectWithoutTourInput | TripCreateOrConnectWithoutTourInput[]
    createMany?: TripCreateManyTourInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type FaqUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<FaqCreateWithoutTourInput, FaqUncheckedCreateWithoutTourInput> | FaqCreateWithoutTourInput[] | FaqUncheckedCreateWithoutTourInput[]
    connectOrCreate?: FaqCreateOrConnectWithoutTourInput | FaqCreateOrConnectWithoutTourInput[]
    createMany?: FaqCreateManyTourInputEnvelope
    connect?: FaqWhereUniqueInput | FaqWhereUniqueInput[]
  }

  export type ReviewUpdateManyWithoutTourNestedInput = {
    create?: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput> | ReviewCreateWithoutTourInput[] | ReviewUncheckedCreateWithoutTourInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTourInput | ReviewCreateOrConnectWithoutTourInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTourInput | ReviewUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: ReviewCreateManyTourInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTourInput | ReviewUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTourInput | ReviewUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TripUpdateManyWithoutTourNestedInput = {
    create?: XOR<TripCreateWithoutTourInput, TripUncheckedCreateWithoutTourInput> | TripCreateWithoutTourInput[] | TripUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TripCreateOrConnectWithoutTourInput | TripCreateOrConnectWithoutTourInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutTourInput | TripUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TripCreateManyTourInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutTourInput | TripUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TripUpdateManyWithWhereWithoutTourInput | TripUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type FaqUpdateManyWithoutTourNestedInput = {
    create?: XOR<FaqCreateWithoutTourInput, FaqUncheckedCreateWithoutTourInput> | FaqCreateWithoutTourInput[] | FaqUncheckedCreateWithoutTourInput[]
    connectOrCreate?: FaqCreateOrConnectWithoutTourInput | FaqCreateOrConnectWithoutTourInput[]
    upsert?: FaqUpsertWithWhereUniqueWithoutTourInput | FaqUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: FaqCreateManyTourInputEnvelope
    set?: FaqWhereUniqueInput | FaqWhereUniqueInput[]
    disconnect?: FaqWhereUniqueInput | FaqWhereUniqueInput[]
    delete?: FaqWhereUniqueInput | FaqWhereUniqueInput[]
    connect?: FaqWhereUniqueInput | FaqWhereUniqueInput[]
    update?: FaqUpdateWithWhereUniqueWithoutTourInput | FaqUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: FaqUpdateManyWithWhereWithoutTourInput | FaqUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: FaqScalarWhereInput | FaqScalarWhereInput[]
  }

  export type TourTypeUpdateOneRequiredWithoutToursNestedInput = {
    create?: XOR<TourTypeCreateWithoutToursInput, TourTypeUncheckedCreateWithoutToursInput>
    connectOrCreate?: TourTypeCreateOrConnectWithoutToursInput
    upsert?: TourTypeUpsertWithoutToursInput
    connect?: TourTypeWhereUniqueInput
    update?: XOR<XOR<TourTypeUpdateToOneWithWhereWithoutToursInput, TourTypeUpdateWithoutToursInput>, TourTypeUncheckedUpdateWithoutToursInput>
  }

  export type ReviewUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput> | ReviewCreateWithoutTourInput[] | ReviewUncheckedCreateWithoutTourInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTourInput | ReviewCreateOrConnectWithoutTourInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTourInput | ReviewUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: ReviewCreateManyTourInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTourInput | ReviewUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTourInput | ReviewUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<TripCreateWithoutTourInput, TripUncheckedCreateWithoutTourInput> | TripCreateWithoutTourInput[] | TripUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TripCreateOrConnectWithoutTourInput | TripCreateOrConnectWithoutTourInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutTourInput | TripUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TripCreateManyTourInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutTourInput | TripUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TripUpdateManyWithWhereWithoutTourInput | TripUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type FaqUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<FaqCreateWithoutTourInput, FaqUncheckedCreateWithoutTourInput> | FaqCreateWithoutTourInput[] | FaqUncheckedCreateWithoutTourInput[]
    connectOrCreate?: FaqCreateOrConnectWithoutTourInput | FaqCreateOrConnectWithoutTourInput[]
    upsert?: FaqUpsertWithWhereUniqueWithoutTourInput | FaqUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: FaqCreateManyTourInputEnvelope
    set?: FaqWhereUniqueInput | FaqWhereUniqueInput[]
    disconnect?: FaqWhereUniqueInput | FaqWhereUniqueInput[]
    delete?: FaqWhereUniqueInput | FaqWhereUniqueInput[]
    connect?: FaqWhereUniqueInput | FaqWhereUniqueInput[]
    update?: FaqUpdateWithWhereUniqueWithoutTourInput | FaqUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: FaqUpdateManyWithWhereWithoutTourInput | FaqUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: FaqScalarWhereInput | FaqScalarWhereInput[]
  }

  export type TourCreateNestedManyWithoutTourTypeInput = {
    create?: XOR<TourCreateWithoutTourTypeInput, TourUncheckedCreateWithoutTourTypeInput> | TourCreateWithoutTourTypeInput[] | TourUncheckedCreateWithoutTourTypeInput[]
    connectOrCreate?: TourCreateOrConnectWithoutTourTypeInput | TourCreateOrConnectWithoutTourTypeInput[]
    createMany?: TourCreateManyTourTypeInputEnvelope
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
  }

  export type TourUncheckedCreateNestedManyWithoutTourTypeInput = {
    create?: XOR<TourCreateWithoutTourTypeInput, TourUncheckedCreateWithoutTourTypeInput> | TourCreateWithoutTourTypeInput[] | TourUncheckedCreateWithoutTourTypeInput[]
    connectOrCreate?: TourCreateOrConnectWithoutTourTypeInput | TourCreateOrConnectWithoutTourTypeInput[]
    createMany?: TourCreateManyTourTypeInputEnvelope
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
  }

  export type TourUpdateManyWithoutTourTypeNestedInput = {
    create?: XOR<TourCreateWithoutTourTypeInput, TourUncheckedCreateWithoutTourTypeInput> | TourCreateWithoutTourTypeInput[] | TourUncheckedCreateWithoutTourTypeInput[]
    connectOrCreate?: TourCreateOrConnectWithoutTourTypeInput | TourCreateOrConnectWithoutTourTypeInput[]
    upsert?: TourUpsertWithWhereUniqueWithoutTourTypeInput | TourUpsertWithWhereUniqueWithoutTourTypeInput[]
    createMany?: TourCreateManyTourTypeInputEnvelope
    set?: TourWhereUniqueInput | TourWhereUniqueInput[]
    disconnect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    delete?: TourWhereUniqueInput | TourWhereUniqueInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    update?: TourUpdateWithWhereUniqueWithoutTourTypeInput | TourUpdateWithWhereUniqueWithoutTourTypeInput[]
    updateMany?: TourUpdateManyWithWhereWithoutTourTypeInput | TourUpdateManyWithWhereWithoutTourTypeInput[]
    deleteMany?: TourScalarWhereInput | TourScalarWhereInput[]
  }

  export type TourUncheckedUpdateManyWithoutTourTypeNestedInput = {
    create?: XOR<TourCreateWithoutTourTypeInput, TourUncheckedCreateWithoutTourTypeInput> | TourCreateWithoutTourTypeInput[] | TourUncheckedCreateWithoutTourTypeInput[]
    connectOrCreate?: TourCreateOrConnectWithoutTourTypeInput | TourCreateOrConnectWithoutTourTypeInput[]
    upsert?: TourUpsertWithWhereUniqueWithoutTourTypeInput | TourUpsertWithWhereUniqueWithoutTourTypeInput[]
    createMany?: TourCreateManyTourTypeInputEnvelope
    set?: TourWhereUniqueInput | TourWhereUniqueInput[]
    disconnect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    delete?: TourWhereUniqueInput | TourWhereUniqueInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    update?: TourUpdateWithWhereUniqueWithoutTourTypeInput | TourUpdateWithWhereUniqueWithoutTourTypeInput[]
    updateMany?: TourUpdateManyWithWhereWithoutTourTypeInput | TourUpdateManyWithWhereWithoutTourTypeInput[]
    deleteMany?: TourScalarWhereInput | TourScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutTripInput = {
    create?: XOR<CategoryCreateWithoutTripInput, CategoryUncheckedCreateWithoutTripInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTripInput
    connect?: CategoryWhereUniqueInput
  }

  export type TourCreateNestedOneWithoutTripsInput = {
    create?: XOR<TourCreateWithoutTripsInput, TourUncheckedCreateWithoutTripsInput>
    connectOrCreate?: TourCreateOrConnectWithoutTripsInput
    connect?: TourWhereUniqueInput
  }

  export type ItineraryCreateNestedManyWithoutTripInput = {
    create?: XOR<ItineraryCreateWithoutTripInput, ItineraryUncheckedCreateWithoutTripInput> | ItineraryCreateWithoutTripInput[] | ItineraryUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ItineraryCreateOrConnectWithoutTripInput | ItineraryCreateOrConnectWithoutTripInput[]
    createMany?: ItineraryCreateManyTripInputEnvelope
    connect?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
  }

  export type TripDateCreateNestedManyWithoutTripInput = {
    create?: XOR<TripDateCreateWithoutTripInput, TripDateUncheckedCreateWithoutTripInput> | TripDateCreateWithoutTripInput[] | TripDateUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripDateCreateOrConnectWithoutTripInput | TripDateCreateOrConnectWithoutTripInput[]
    createMany?: TripDateCreateManyTripInputEnvelope
    connect?: TripDateWhereUniqueInput | TripDateWhereUniqueInput[]
  }

  export type BookingSessionCreateNestedManyWithoutTripInput = {
    create?: XOR<BookingSessionCreateWithoutTripInput, BookingSessionUncheckedCreateWithoutTripInput> | BookingSessionCreateWithoutTripInput[] | BookingSessionUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookingSessionCreateOrConnectWithoutTripInput | BookingSessionCreateOrConnectWithoutTripInput[]
    createMany?: BookingSessionCreateManyTripInputEnvelope
    connect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutTripInput = {
    create?: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput> | BookingCreateWithoutTripInput[] | BookingUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTripInput | BookingCreateOrConnectWithoutTripInput[]
    createMany?: BookingCreateManyTripInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ItineraryUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<ItineraryCreateWithoutTripInput, ItineraryUncheckedCreateWithoutTripInput> | ItineraryCreateWithoutTripInput[] | ItineraryUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ItineraryCreateOrConnectWithoutTripInput | ItineraryCreateOrConnectWithoutTripInput[]
    createMany?: ItineraryCreateManyTripInputEnvelope
    connect?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
  }

  export type TripDateUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TripDateCreateWithoutTripInput, TripDateUncheckedCreateWithoutTripInput> | TripDateCreateWithoutTripInput[] | TripDateUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripDateCreateOrConnectWithoutTripInput | TripDateCreateOrConnectWithoutTripInput[]
    createMany?: TripDateCreateManyTripInputEnvelope
    connect?: TripDateWhereUniqueInput | TripDateWhereUniqueInput[]
  }

  export type BookingSessionUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<BookingSessionCreateWithoutTripInput, BookingSessionUncheckedCreateWithoutTripInput> | BookingSessionCreateWithoutTripInput[] | BookingSessionUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookingSessionCreateOrConnectWithoutTripInput | BookingSessionCreateOrConnectWithoutTripInput[]
    createMany?: BookingSessionCreateManyTripInputEnvelope
    connect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput> | BookingCreateWithoutTripInput[] | BookingUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTripInput | BookingCreateOrConnectWithoutTripInput[]
    createMany?: BookingCreateManyTripInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutTripNestedInput = {
    create?: XOR<CategoryCreateWithoutTripInput, CategoryUncheckedCreateWithoutTripInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTripInput
    upsert?: CategoryUpsertWithoutTripInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTripInput, CategoryUpdateWithoutTripInput>, CategoryUncheckedUpdateWithoutTripInput>
  }

  export type TourUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<TourCreateWithoutTripsInput, TourUncheckedCreateWithoutTripsInput>
    connectOrCreate?: TourCreateOrConnectWithoutTripsInput
    upsert?: TourUpsertWithoutTripsInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutTripsInput, TourUpdateWithoutTripsInput>, TourUncheckedUpdateWithoutTripsInput>
  }

  export type ItineraryUpdateManyWithoutTripNestedInput = {
    create?: XOR<ItineraryCreateWithoutTripInput, ItineraryUncheckedCreateWithoutTripInput> | ItineraryCreateWithoutTripInput[] | ItineraryUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ItineraryCreateOrConnectWithoutTripInput | ItineraryCreateOrConnectWithoutTripInput[]
    upsert?: ItineraryUpsertWithWhereUniqueWithoutTripInput | ItineraryUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: ItineraryCreateManyTripInputEnvelope
    set?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
    disconnect?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
    delete?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
    connect?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
    update?: ItineraryUpdateWithWhereUniqueWithoutTripInput | ItineraryUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: ItineraryUpdateManyWithWhereWithoutTripInput | ItineraryUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: ItineraryScalarWhereInput | ItineraryScalarWhereInput[]
  }

  export type TripDateUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripDateCreateWithoutTripInput, TripDateUncheckedCreateWithoutTripInput> | TripDateCreateWithoutTripInput[] | TripDateUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripDateCreateOrConnectWithoutTripInput | TripDateCreateOrConnectWithoutTripInput[]
    upsert?: TripDateUpsertWithWhereUniqueWithoutTripInput | TripDateUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripDateCreateManyTripInputEnvelope
    set?: TripDateWhereUniqueInput | TripDateWhereUniqueInput[]
    disconnect?: TripDateWhereUniqueInput | TripDateWhereUniqueInput[]
    delete?: TripDateWhereUniqueInput | TripDateWhereUniqueInput[]
    connect?: TripDateWhereUniqueInput | TripDateWhereUniqueInput[]
    update?: TripDateUpdateWithWhereUniqueWithoutTripInput | TripDateUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripDateUpdateManyWithWhereWithoutTripInput | TripDateUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripDateScalarWhereInput | TripDateScalarWhereInput[]
  }

  export type BookingSessionUpdateManyWithoutTripNestedInput = {
    create?: XOR<BookingSessionCreateWithoutTripInput, BookingSessionUncheckedCreateWithoutTripInput> | BookingSessionCreateWithoutTripInput[] | BookingSessionUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookingSessionCreateOrConnectWithoutTripInput | BookingSessionCreateOrConnectWithoutTripInput[]
    upsert?: BookingSessionUpsertWithWhereUniqueWithoutTripInput | BookingSessionUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: BookingSessionCreateManyTripInputEnvelope
    set?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    disconnect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    delete?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    connect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    update?: BookingSessionUpdateWithWhereUniqueWithoutTripInput | BookingSessionUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: BookingSessionUpdateManyWithWhereWithoutTripInput | BookingSessionUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: BookingSessionScalarWhereInput | BookingSessionScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutTripNestedInput = {
    create?: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput> | BookingCreateWithoutTripInput[] | BookingUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTripInput | BookingCreateOrConnectWithoutTripInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTripInput | BookingUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: BookingCreateManyTripInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTripInput | BookingUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTripInput | BookingUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ItineraryUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<ItineraryCreateWithoutTripInput, ItineraryUncheckedCreateWithoutTripInput> | ItineraryCreateWithoutTripInput[] | ItineraryUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ItineraryCreateOrConnectWithoutTripInput | ItineraryCreateOrConnectWithoutTripInput[]
    upsert?: ItineraryUpsertWithWhereUniqueWithoutTripInput | ItineraryUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: ItineraryCreateManyTripInputEnvelope
    set?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
    disconnect?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
    delete?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
    connect?: ItineraryWhereUniqueInput | ItineraryWhereUniqueInput[]
    update?: ItineraryUpdateWithWhereUniqueWithoutTripInput | ItineraryUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: ItineraryUpdateManyWithWhereWithoutTripInput | ItineraryUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: ItineraryScalarWhereInput | ItineraryScalarWhereInput[]
  }

  export type TripDateUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripDateCreateWithoutTripInput, TripDateUncheckedCreateWithoutTripInput> | TripDateCreateWithoutTripInput[] | TripDateUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripDateCreateOrConnectWithoutTripInput | TripDateCreateOrConnectWithoutTripInput[]
    upsert?: TripDateUpsertWithWhereUniqueWithoutTripInput | TripDateUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripDateCreateManyTripInputEnvelope
    set?: TripDateWhereUniqueInput | TripDateWhereUniqueInput[]
    disconnect?: TripDateWhereUniqueInput | TripDateWhereUniqueInput[]
    delete?: TripDateWhereUniqueInput | TripDateWhereUniqueInput[]
    connect?: TripDateWhereUniqueInput | TripDateWhereUniqueInput[]
    update?: TripDateUpdateWithWhereUniqueWithoutTripInput | TripDateUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripDateUpdateManyWithWhereWithoutTripInput | TripDateUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripDateScalarWhereInput | TripDateScalarWhereInput[]
  }

  export type BookingSessionUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<BookingSessionCreateWithoutTripInput, BookingSessionUncheckedCreateWithoutTripInput> | BookingSessionCreateWithoutTripInput[] | BookingSessionUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookingSessionCreateOrConnectWithoutTripInput | BookingSessionCreateOrConnectWithoutTripInput[]
    upsert?: BookingSessionUpsertWithWhereUniqueWithoutTripInput | BookingSessionUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: BookingSessionCreateManyTripInputEnvelope
    set?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    disconnect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    delete?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    connect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    update?: BookingSessionUpdateWithWhereUniqueWithoutTripInput | BookingSessionUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: BookingSessionUpdateManyWithWhereWithoutTripInput | BookingSessionUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: BookingSessionScalarWhereInput | BookingSessionScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput> | BookingCreateWithoutTripInput[] | BookingUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTripInput | BookingCreateOrConnectWithoutTripInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTripInput | BookingUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: BookingCreateManyTripInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTripInput | BookingUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTripInput | BookingUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TripCreateNestedOneWithoutTripDateInput = {
    create?: XOR<TripCreateWithoutTripDateInput, TripUncheckedCreateWithoutTripDateInput>
    connectOrCreate?: TripCreateOrConnectWithoutTripDateInput
    connect?: TripWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutTripDateInput = {
    create?: XOR<BookingCreateWithoutTripDateInput, BookingUncheckedCreateWithoutTripDateInput> | BookingCreateWithoutTripDateInput[] | BookingUncheckedCreateWithoutTripDateInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTripDateInput | BookingCreateOrConnectWithoutTripDateInput[]
    createMany?: BookingCreateManyTripDateInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TripPricingCreateNestedManyWithoutTripDateInput = {
    create?: XOR<TripPricingCreateWithoutTripDateInput, TripPricingUncheckedCreateWithoutTripDateInput> | TripPricingCreateWithoutTripDateInput[] | TripPricingUncheckedCreateWithoutTripDateInput[]
    connectOrCreate?: TripPricingCreateOrConnectWithoutTripDateInput | TripPricingCreateOrConnectWithoutTripDateInput[]
    createMany?: TripPricingCreateManyTripDateInputEnvelope
    connect?: TripPricingWhereUniqueInput | TripPricingWhereUniqueInput[]
  }

  export type BookingSessionCreateNestedManyWithoutTripDateInput = {
    create?: XOR<BookingSessionCreateWithoutTripDateInput, BookingSessionUncheckedCreateWithoutTripDateInput> | BookingSessionCreateWithoutTripDateInput[] | BookingSessionUncheckedCreateWithoutTripDateInput[]
    connectOrCreate?: BookingSessionCreateOrConnectWithoutTripDateInput | BookingSessionCreateOrConnectWithoutTripDateInput[]
    createMany?: BookingSessionCreateManyTripDateInputEnvelope
    connect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutTripDateInput = {
    create?: XOR<BookingCreateWithoutTripDateInput, BookingUncheckedCreateWithoutTripDateInput> | BookingCreateWithoutTripDateInput[] | BookingUncheckedCreateWithoutTripDateInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTripDateInput | BookingCreateOrConnectWithoutTripDateInput[]
    createMany?: BookingCreateManyTripDateInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TripPricingUncheckedCreateNestedManyWithoutTripDateInput = {
    create?: XOR<TripPricingCreateWithoutTripDateInput, TripPricingUncheckedCreateWithoutTripDateInput> | TripPricingCreateWithoutTripDateInput[] | TripPricingUncheckedCreateWithoutTripDateInput[]
    connectOrCreate?: TripPricingCreateOrConnectWithoutTripDateInput | TripPricingCreateOrConnectWithoutTripDateInput[]
    createMany?: TripPricingCreateManyTripDateInputEnvelope
    connect?: TripPricingWhereUniqueInput | TripPricingWhereUniqueInput[]
  }

  export type BookingSessionUncheckedCreateNestedManyWithoutTripDateInput = {
    create?: XOR<BookingSessionCreateWithoutTripDateInput, BookingSessionUncheckedCreateWithoutTripDateInput> | BookingSessionCreateWithoutTripDateInput[] | BookingSessionUncheckedCreateWithoutTripDateInput[]
    connectOrCreate?: BookingSessionCreateOrConnectWithoutTripDateInput | BookingSessionCreateOrConnectWithoutTripDateInput[]
    createMany?: BookingSessionCreateManyTripDateInputEnvelope
    connect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
  }

  export type TripUpdateOneRequiredWithoutTripDateNestedInput = {
    create?: XOR<TripCreateWithoutTripDateInput, TripUncheckedCreateWithoutTripDateInput>
    connectOrCreate?: TripCreateOrConnectWithoutTripDateInput
    upsert?: TripUpsertWithoutTripDateInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutTripDateInput, TripUpdateWithoutTripDateInput>, TripUncheckedUpdateWithoutTripDateInput>
  }

  export type BookingUpdateManyWithoutTripDateNestedInput = {
    create?: XOR<BookingCreateWithoutTripDateInput, BookingUncheckedCreateWithoutTripDateInput> | BookingCreateWithoutTripDateInput[] | BookingUncheckedCreateWithoutTripDateInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTripDateInput | BookingCreateOrConnectWithoutTripDateInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTripDateInput | BookingUpsertWithWhereUniqueWithoutTripDateInput[]
    createMany?: BookingCreateManyTripDateInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTripDateInput | BookingUpdateWithWhereUniqueWithoutTripDateInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTripDateInput | BookingUpdateManyWithWhereWithoutTripDateInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TripPricingUpdateManyWithoutTripDateNestedInput = {
    create?: XOR<TripPricingCreateWithoutTripDateInput, TripPricingUncheckedCreateWithoutTripDateInput> | TripPricingCreateWithoutTripDateInput[] | TripPricingUncheckedCreateWithoutTripDateInput[]
    connectOrCreate?: TripPricingCreateOrConnectWithoutTripDateInput | TripPricingCreateOrConnectWithoutTripDateInput[]
    upsert?: TripPricingUpsertWithWhereUniqueWithoutTripDateInput | TripPricingUpsertWithWhereUniqueWithoutTripDateInput[]
    createMany?: TripPricingCreateManyTripDateInputEnvelope
    set?: TripPricingWhereUniqueInput | TripPricingWhereUniqueInput[]
    disconnect?: TripPricingWhereUniqueInput | TripPricingWhereUniqueInput[]
    delete?: TripPricingWhereUniqueInput | TripPricingWhereUniqueInput[]
    connect?: TripPricingWhereUniqueInput | TripPricingWhereUniqueInput[]
    update?: TripPricingUpdateWithWhereUniqueWithoutTripDateInput | TripPricingUpdateWithWhereUniqueWithoutTripDateInput[]
    updateMany?: TripPricingUpdateManyWithWhereWithoutTripDateInput | TripPricingUpdateManyWithWhereWithoutTripDateInput[]
    deleteMany?: TripPricingScalarWhereInput | TripPricingScalarWhereInput[]
  }

  export type BookingSessionUpdateManyWithoutTripDateNestedInput = {
    create?: XOR<BookingSessionCreateWithoutTripDateInput, BookingSessionUncheckedCreateWithoutTripDateInput> | BookingSessionCreateWithoutTripDateInput[] | BookingSessionUncheckedCreateWithoutTripDateInput[]
    connectOrCreate?: BookingSessionCreateOrConnectWithoutTripDateInput | BookingSessionCreateOrConnectWithoutTripDateInput[]
    upsert?: BookingSessionUpsertWithWhereUniqueWithoutTripDateInput | BookingSessionUpsertWithWhereUniqueWithoutTripDateInput[]
    createMany?: BookingSessionCreateManyTripDateInputEnvelope
    set?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    disconnect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    delete?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    connect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    update?: BookingSessionUpdateWithWhereUniqueWithoutTripDateInput | BookingSessionUpdateWithWhereUniqueWithoutTripDateInput[]
    updateMany?: BookingSessionUpdateManyWithWhereWithoutTripDateInput | BookingSessionUpdateManyWithWhereWithoutTripDateInput[]
    deleteMany?: BookingSessionScalarWhereInput | BookingSessionScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutTripDateNestedInput = {
    create?: XOR<BookingCreateWithoutTripDateInput, BookingUncheckedCreateWithoutTripDateInput> | BookingCreateWithoutTripDateInput[] | BookingUncheckedCreateWithoutTripDateInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTripDateInput | BookingCreateOrConnectWithoutTripDateInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTripDateInput | BookingUpsertWithWhereUniqueWithoutTripDateInput[]
    createMany?: BookingCreateManyTripDateInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTripDateInput | BookingUpdateWithWhereUniqueWithoutTripDateInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTripDateInput | BookingUpdateManyWithWhereWithoutTripDateInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TripPricingUncheckedUpdateManyWithoutTripDateNestedInput = {
    create?: XOR<TripPricingCreateWithoutTripDateInput, TripPricingUncheckedCreateWithoutTripDateInput> | TripPricingCreateWithoutTripDateInput[] | TripPricingUncheckedCreateWithoutTripDateInput[]
    connectOrCreate?: TripPricingCreateOrConnectWithoutTripDateInput | TripPricingCreateOrConnectWithoutTripDateInput[]
    upsert?: TripPricingUpsertWithWhereUniqueWithoutTripDateInput | TripPricingUpsertWithWhereUniqueWithoutTripDateInput[]
    createMany?: TripPricingCreateManyTripDateInputEnvelope
    set?: TripPricingWhereUniqueInput | TripPricingWhereUniqueInput[]
    disconnect?: TripPricingWhereUniqueInput | TripPricingWhereUniqueInput[]
    delete?: TripPricingWhereUniqueInput | TripPricingWhereUniqueInput[]
    connect?: TripPricingWhereUniqueInput | TripPricingWhereUniqueInput[]
    update?: TripPricingUpdateWithWhereUniqueWithoutTripDateInput | TripPricingUpdateWithWhereUniqueWithoutTripDateInput[]
    updateMany?: TripPricingUpdateManyWithWhereWithoutTripDateInput | TripPricingUpdateManyWithWhereWithoutTripDateInput[]
    deleteMany?: TripPricingScalarWhereInput | TripPricingScalarWhereInput[]
  }

  export type BookingSessionUncheckedUpdateManyWithoutTripDateNestedInput = {
    create?: XOR<BookingSessionCreateWithoutTripDateInput, BookingSessionUncheckedCreateWithoutTripDateInput> | BookingSessionCreateWithoutTripDateInput[] | BookingSessionUncheckedCreateWithoutTripDateInput[]
    connectOrCreate?: BookingSessionCreateOrConnectWithoutTripDateInput | BookingSessionCreateOrConnectWithoutTripDateInput[]
    upsert?: BookingSessionUpsertWithWhereUniqueWithoutTripDateInput | BookingSessionUpsertWithWhereUniqueWithoutTripDateInput[]
    createMany?: BookingSessionCreateManyTripDateInputEnvelope
    set?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    disconnect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    delete?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    connect?: BookingSessionWhereUniqueInput | BookingSessionWhereUniqueInput[]
    update?: BookingSessionUpdateWithWhereUniqueWithoutTripDateInput | BookingSessionUpdateWithWhereUniqueWithoutTripDateInput[]
    updateMany?: BookingSessionUpdateManyWithWhereWithoutTripDateInput | BookingSessionUpdateManyWithWhereWithoutTripDateInput[]
    deleteMany?: BookingSessionScalarWhereInput | BookingSessionScalarWhereInput[]
  }

  export type TripCreateNestedOneWithoutItineraryInput = {
    create?: XOR<TripCreateWithoutItineraryInput, TripUncheckedCreateWithoutItineraryInput>
    connectOrCreate?: TripCreateOrConnectWithoutItineraryInput
    connect?: TripWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutItineraryNestedInput = {
    create?: XOR<TripCreateWithoutItineraryInput, TripUncheckedCreateWithoutItineraryInput>
    connectOrCreate?: TripCreateOrConnectWithoutItineraryInput
    upsert?: TripUpsertWithoutItineraryInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutItineraryInput, TripUpdateWithoutItineraryInput>, TripUncheckedUpdateWithoutItineraryInput>
  }

  export type TripCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TripCreateWithoutCategoryInput, TripUncheckedCreateWithoutCategoryInput> | TripCreateWithoutCategoryInput[] | TripUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCategoryInput | TripCreateOrConnectWithoutCategoryInput[]
    createMany?: TripCreateManyCategoryInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TripCreateWithoutCategoryInput, TripUncheckedCreateWithoutCategoryInput> | TripCreateWithoutCategoryInput[] | TripUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCategoryInput | TripCreateOrConnectWithoutCategoryInput[]
    createMany?: TripCreateManyCategoryInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TripCreateWithoutCategoryInput, TripUncheckedCreateWithoutCategoryInput> | TripCreateWithoutCategoryInput[] | TripUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCategoryInput | TripCreateOrConnectWithoutCategoryInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutCategoryInput | TripUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TripCreateManyCategoryInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutCategoryInput | TripUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TripUpdateManyWithWhereWithoutCategoryInput | TripUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TripCreateWithoutCategoryInput, TripUncheckedCreateWithoutCategoryInput> | TripCreateWithoutCategoryInput[] | TripUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCategoryInput | TripCreateOrConnectWithoutCategoryInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutCategoryInput | TripUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TripCreateManyCategoryInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutCategoryInput | TripUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TripUpdateManyWithWhereWithoutCategoryInput | TripUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TripDateCreateNestedOneWithoutPricingInput = {
    create?: XOR<TripDateCreateWithoutPricingInput, TripDateUncheckedCreateWithoutPricingInput>
    connectOrCreate?: TripDateCreateOrConnectWithoutPricingInput
    connect?: TripDateWhereUniqueInput
  }

  export type EnumSharingTypeFieldUpdateOperationsInput = {
    set?: $Enums.SharingType
  }

  export type TripDateUpdateOneRequiredWithoutPricingNestedInput = {
    create?: XOR<TripDateCreateWithoutPricingInput, TripDateUncheckedCreateWithoutPricingInput>
    connectOrCreate?: TripDateCreateOrConnectWithoutPricingInput
    upsert?: TripDateUpsertWithoutPricingInput
    connect?: TripDateWhereUniqueInput
    update?: XOR<XOR<TripDateUpdateToOneWithWhereWithoutPricingInput, TripDateUpdateWithoutPricingInput>, TripDateUncheckedUpdateWithoutPricingInput>
  }

  export type TourCreateNestedOneWithoutFaqInput = {
    create?: XOR<TourCreateWithoutFaqInput, TourUncheckedCreateWithoutFaqInput>
    connectOrCreate?: TourCreateOrConnectWithoutFaqInput
    connect?: TourWhereUniqueInput
  }

  export type TourUpdateOneRequiredWithoutFaqNestedInput = {
    create?: XOR<TourCreateWithoutFaqInput, TourUncheckedCreateWithoutFaqInput>
    connectOrCreate?: TourCreateOrConnectWithoutFaqInput
    upsert?: TourUpsertWithoutFaqInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutFaqInput, TourUpdateWithoutFaqInput>, TourUncheckedUpdateWithoutFaqInput>
  }

  export type UserCreateNestedOneWithoutBookingSessionInput = {
    create?: XOR<UserCreateWithoutBookingSessionInput, UserUncheckedCreateWithoutBookingSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingSessionInput
    connect?: UserWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutBookingSessionInput = {
    create?: XOR<TripCreateWithoutBookingSessionInput, TripUncheckedCreateWithoutBookingSessionInput>
    connectOrCreate?: TripCreateOrConnectWithoutBookingSessionInput
    connect?: TripWhereUniqueInput
  }

  export type TripDateCreateNestedOneWithoutBookingSessionInput = {
    create?: XOR<TripDateCreateWithoutBookingSessionInput, TripDateUncheckedCreateWithoutBookingSessionInput>
    connectOrCreate?: TripDateCreateOrConnectWithoutBookingSessionInput
    connect?: TripDateWhereUniqueInput
  }

  export type EnumBookingSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingSessionStatus
  }

  export type UserUpdateOneRequiredWithoutBookingSessionNestedInput = {
    create?: XOR<UserCreateWithoutBookingSessionInput, UserUncheckedCreateWithoutBookingSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingSessionInput
    upsert?: UserUpsertWithoutBookingSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingSessionInput, UserUpdateWithoutBookingSessionInput>, UserUncheckedUpdateWithoutBookingSessionInput>
  }

  export type TripUpdateOneRequiredWithoutBookingSessionNestedInput = {
    create?: XOR<TripCreateWithoutBookingSessionInput, TripUncheckedCreateWithoutBookingSessionInput>
    connectOrCreate?: TripCreateOrConnectWithoutBookingSessionInput
    upsert?: TripUpsertWithoutBookingSessionInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutBookingSessionInput, TripUpdateWithoutBookingSessionInput>, TripUncheckedUpdateWithoutBookingSessionInput>
  }

  export type TripDateUpdateOneRequiredWithoutBookingSessionNestedInput = {
    create?: XOR<TripDateCreateWithoutBookingSessionInput, TripDateUncheckedCreateWithoutBookingSessionInput>
    connectOrCreate?: TripDateCreateOrConnectWithoutBookingSessionInput
    upsert?: TripDateUpsertWithoutBookingSessionInput
    connect?: TripDateWhereUniqueInput
    update?: XOR<XOR<TripDateUpdateToOneWithWhereWithoutBookingSessionInput, TripDateUpdateWithoutBookingSessionInput>, TripDateUncheckedUpdateWithoutBookingSessionInput>
  }

  export type BookingCreateNestedOneWithoutItemsInput = {
    create?: XOR<BookingCreateWithoutItemsInput, BookingUncheckedCreateWithoutItemsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutItemsInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<BookingCreateWithoutItemsInput, BookingUncheckedCreateWithoutItemsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutItemsInput
    upsert?: BookingUpsertWithoutItemsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutItemsInput, BookingUpdateWithoutItemsInput>, BookingUncheckedUpdateWithoutItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSharingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SharingType | EnumSharingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SharingType[] | ListEnumSharingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SharingType[] | ListEnumSharingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSharingTypeFilter<$PrismaModel> | $Enums.SharingType
  }

  export type NestedEnumSharingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SharingType | EnumSharingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SharingType[] | ListEnumSharingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SharingType[] | ListEnumSharingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSharingTypeWithAggregatesFilter<$PrismaModel> | $Enums.SharingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSharingTypeFilter<$PrismaModel>
    _max?: NestedEnumSharingTypeFilter<$PrismaModel>
  }

  export type NestedEnumBookingSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingSessionStatus | EnumBookingSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingSessionStatus[] | ListEnumBookingSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingSessionStatus[] | ListEnumBookingSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingSessionStatusFilter<$PrismaModel> | $Enums.BookingSessionStatus
  }

  export type NestedEnumBookingSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingSessionStatus | EnumBookingSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingSessionStatus[] | ListEnumBookingSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingSessionStatus[] | ListEnumBookingSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingSessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingSessionStatusFilter<$PrismaModel>
  }

  export type BookingSessionCreateWithoutUserInput = {
    id?: string
    seatCount: number
    status?: $Enums.BookingSessionStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutBookingSessionInput
    tripDate: TripDateCreateNestedOneWithoutBookingSessionInput
  }

  export type BookingSessionUncheckedCreateWithoutUserInput = {
    id?: string
    tripId: number
    tripDateId: number
    seatCount: number
    status?: $Enums.BookingSessionStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingSessionCreateOrConnectWithoutUserInput = {
    where: BookingSessionWhereUniqueInput
    create: XOR<BookingSessionCreateWithoutUserInput, BookingSessionUncheckedCreateWithoutUserInput>
  }

  export type BookingSessionCreateManyUserInputEnvelope = {
    data: BookingSessionCreateManyUserInput | BookingSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutUserInput = {
    mobileNumber?: string | null
    status?: $Enums.BookingStatus
    totalAmount: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutBookingInput
    tripDate: TripDateCreateNestedOneWithoutBookingInput
    items?: BookingItemCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: number
    tripId: number
    tripDateId: number
    mobileNumber?: string | null
    status?: $Enums.BookingStatus
    totalAmount: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: BookingItemUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tour: TourCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    rating: number
    tourId: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingSessionWhereUniqueInput
    update: XOR<BookingSessionUpdateWithoutUserInput, BookingSessionUncheckedUpdateWithoutUserInput>
    create: XOR<BookingSessionCreateWithoutUserInput, BookingSessionUncheckedCreateWithoutUserInput>
  }

  export type BookingSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingSessionWhereUniqueInput
    data: XOR<BookingSessionUpdateWithoutUserInput, BookingSessionUncheckedUpdateWithoutUserInput>
  }

  export type BookingSessionUpdateManyWithWhereWithoutUserInput = {
    where: BookingSessionScalarWhereInput
    data: XOR<BookingSessionUpdateManyMutationInput, BookingSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingSessionScalarWhereInput = {
    AND?: BookingSessionScalarWhereInput | BookingSessionScalarWhereInput[]
    OR?: BookingSessionScalarWhereInput[]
    NOT?: BookingSessionScalarWhereInput | BookingSessionScalarWhereInput[]
    id?: StringFilter<"BookingSession"> | string
    userId?: StringFilter<"BookingSession"> | string
    tripId?: IntFilter<"BookingSession"> | number
    tripDateId?: IntFilter<"BookingSession"> | number
    seatCount?: IntFilter<"BookingSession"> | number
    status?: EnumBookingSessionStatusFilter<"BookingSession"> | $Enums.BookingSessionStatus
    expiresAt?: DateTimeFilter<"BookingSession"> | Date | string
    createdAt?: DateTimeFilter<"BookingSession"> | Date | string
    updatedAt?: DateTimeFilter<"BookingSession"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    userId?: StringFilter<"Booking"> | string
    tripId?: IntFilter<"Booking"> | number
    tripDateId?: IntFilter<"Booking"> | number
    mobileNumber?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    totalAmount?: IntFilter<"Booking"> | number
    totalSeats?: IntFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    userId?: StringFilter<"Review"> | string
    tourId?: IntFilter<"Review"> | number
    review?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type UserCreateWithoutBookingsInput = {
    id: string
    name?: string | null
    email: string
    phone?: string | null
    imageUrl?: string | null
    password?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingSession?: BookingSessionCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id: string
    name?: string | null
    email: string
    phone?: string | null
    imageUrl?: string | null
    password?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingSession?: BookingSessionUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type TripCreateWithoutBookingInput = {
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
    category: CategoryCreateNestedOneWithoutTripInput
    tour: TourCreateNestedOneWithoutTripsInput
    Itinerary?: ItineraryCreateNestedManyWithoutTripInput
    TripDate?: TripDateCreateNestedManyWithoutTripInput
    bookingSession?: BookingSessionCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutBookingInput = {
    id?: number
    categoryId: number
    tourId: number
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
    Itinerary?: ItineraryUncheckedCreateNestedManyWithoutTripInput
    TripDate?: TripDateUncheckedCreateNestedManyWithoutTripInput
    bookingSession?: BookingSessionUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutBookingInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutBookingInput, TripUncheckedCreateWithoutBookingInput>
  }

  export type TripDateCreateWithoutBookingInput = {
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    trip: TripCreateNestedOneWithoutTripDateInput
    pricing?: TripPricingCreateNestedManyWithoutTripDateInput
    bookingSession?: BookingSessionCreateNestedManyWithoutTripDateInput
  }

  export type TripDateUncheckedCreateWithoutBookingInput = {
    id?: number
    tripId: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    pricing?: TripPricingUncheckedCreateNestedManyWithoutTripDateInput
    bookingSession?: BookingSessionUncheckedCreateNestedManyWithoutTripDateInput
  }

  export type TripDateCreateOrConnectWithoutBookingInput = {
    where: TripDateWhereUniqueInput
    create: XOR<TripDateCreateWithoutBookingInput, TripDateUncheckedCreateWithoutBookingInput>
  }

  export type BookingItemCreateWithoutBookingInput = {
    sharingType: $Enums.SharingType
    quantity: number
    pricePerPerson: number
    subtotal: number
  }

  export type BookingItemUncheckedCreateWithoutBookingInput = {
    id?: number
    sharingType: $Enums.SharingType
    quantity: number
    pricePerPerson: number
    subtotal: number
  }

  export type BookingItemCreateOrConnectWithoutBookingInput = {
    where: BookingItemWhereUniqueInput
    create: XOR<BookingItemCreateWithoutBookingInput, BookingItemUncheckedCreateWithoutBookingInput>
  }

  export type BookingItemCreateManyBookingInputEnvelope = {
    data: BookingItemCreateManyBookingInput | BookingItemCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingSession?: BookingSessionUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingSession?: BookingSessionUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripUpsertWithoutBookingInput = {
    update: XOR<TripUpdateWithoutBookingInput, TripUncheckedUpdateWithoutBookingInput>
    create: XOR<TripCreateWithoutBookingInput, TripUncheckedCreateWithoutBookingInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutBookingInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutBookingInput, TripUncheckedUpdateWithoutBookingInput>
  }

  export type TripUpdateWithoutBookingInput = {
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutTripNestedInput
    tour?: TourUpdateOneRequiredWithoutTripsNestedInput
    Itinerary?: ItineraryUpdateManyWithoutTripNestedInput
    TripDate?: TripDateUpdateManyWithoutTripNestedInput
    bookingSession?: BookingSessionUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    Itinerary?: ItineraryUncheckedUpdateManyWithoutTripNestedInput
    TripDate?: TripDateUncheckedUpdateManyWithoutTripNestedInput
    bookingSession?: BookingSessionUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripDateUpsertWithoutBookingInput = {
    update: XOR<TripDateUpdateWithoutBookingInput, TripDateUncheckedUpdateWithoutBookingInput>
    create: XOR<TripDateCreateWithoutBookingInput, TripDateUncheckedCreateWithoutBookingInput>
    where?: TripDateWhereInput
  }

  export type TripDateUpdateToOneWithWhereWithoutBookingInput = {
    where?: TripDateWhereInput
    data: XOR<TripDateUpdateWithoutBookingInput, TripDateUncheckedUpdateWithoutBookingInput>
  }

  export type TripDateUpdateWithoutBookingInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutTripDateNestedInput
    pricing?: TripPricingUpdateManyWithoutTripDateNestedInput
    bookingSession?: BookingSessionUpdateManyWithoutTripDateNestedInput
  }

  export type TripDateUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing?: TripPricingUncheckedUpdateManyWithoutTripDateNestedInput
    bookingSession?: BookingSessionUncheckedUpdateManyWithoutTripDateNestedInput
  }

  export type BookingItemUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingItemWhereUniqueInput
    update: XOR<BookingItemUpdateWithoutBookingInput, BookingItemUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingItemCreateWithoutBookingInput, BookingItemUncheckedCreateWithoutBookingInput>
  }

  export type BookingItemUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingItemWhereUniqueInput
    data: XOR<BookingItemUpdateWithoutBookingInput, BookingItemUncheckedUpdateWithoutBookingInput>
  }

  export type BookingItemUpdateManyWithWhereWithoutBookingInput = {
    where: BookingItemScalarWhereInput
    data: XOR<BookingItemUpdateManyMutationInput, BookingItemUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingItemScalarWhereInput = {
    AND?: BookingItemScalarWhereInput | BookingItemScalarWhereInput[]
    OR?: BookingItemScalarWhereInput[]
    NOT?: BookingItemScalarWhereInput | BookingItemScalarWhereInput[]
    id?: IntFilter<"BookingItem"> | number
    bookingId?: IntFilter<"BookingItem"> | number
    sharingType?: EnumSharingTypeFilter<"BookingItem"> | $Enums.SharingType
    quantity?: IntFilter<"BookingItem"> | number
    pricePerPerson?: IntFilter<"BookingItem"> | number
    subtotal?: IntFilter<"BookingItem"> | number
  }

  export type UserCreateWithoutReviewsInput = {
    id: string
    name?: string | null
    email: string
    phone?: string | null
    imageUrl?: string | null
    password?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingSession?: BookingSessionCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id: string
    name?: string | null
    email: string
    phone?: string | null
    imageUrl?: string | null
    password?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingSession?: BookingSessionUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type TourCreateWithoutReviewsInput = {
    title: string
    slug: string
    about: string
    thumbnailImageUrl: string
    thumbnailVideoUrl?: string | null
    cardImageUrl: string
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutTourInput
    faq?: FaqCreateNestedManyWithoutTourInput
    tourType: TourTypeCreateNestedOneWithoutToursInput
  }

  export type TourUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    slug: string
    about: string
    thumbnailImageUrl: string
    thumbnailVideoUrl?: string | null
    cardImageUrl: string
    tourTypeId: number
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutTourInput
    faq?: FaqUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutReviewsInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutReviewsInput, TourUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingSession?: BookingSessionUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingSession?: BookingSessionUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TourUpsertWithoutReviewsInput = {
    update: XOR<TourUpdateWithoutReviewsInput, TourUncheckedUpdateWithoutReviewsInput>
    create: XOR<TourCreateWithoutReviewsInput, TourUncheckedCreateWithoutReviewsInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutReviewsInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutReviewsInput, TourUncheckedUpdateWithoutReviewsInput>
  }

  export type TourUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutTourNestedInput
    faq?: FaqUpdateManyWithoutTourNestedInput
    tourType?: TourTypeUpdateOneRequiredWithoutToursNestedInput
  }

  export type TourUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    tourTypeId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutTourNestedInput
    faq?: FaqUncheckedUpdateManyWithoutTourNestedInput
  }

  export type ReviewCreateWithoutTourInput = {
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutTourInput = {
    id?: number
    rating: number
    userId: string
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutTourInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput>
  }

  export type ReviewCreateManyTourInputEnvelope = {
    data: ReviewCreateManyTourInput | ReviewCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TripCreateWithoutTourInput = {
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
    category: CategoryCreateNestedOneWithoutTripInput
    Itinerary?: ItineraryCreateNestedManyWithoutTripInput
    TripDate?: TripDateCreateNestedManyWithoutTripInput
    bookingSession?: BookingSessionCreateNestedManyWithoutTripInput
    Booking?: BookingCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutTourInput = {
    id?: number
    categoryId: number
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
    Itinerary?: ItineraryUncheckedCreateNestedManyWithoutTripInput
    TripDate?: TripDateUncheckedCreateNestedManyWithoutTripInput
    bookingSession?: BookingSessionUncheckedCreateNestedManyWithoutTripInput
    Booking?: BookingUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutTourInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutTourInput, TripUncheckedCreateWithoutTourInput>
  }

  export type TripCreateManyTourInputEnvelope = {
    data: TripCreateManyTourInput | TripCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type FaqCreateWithoutTourInput = {
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUncheckedCreateWithoutTourInput = {
    id?: number
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqCreateOrConnectWithoutTourInput = {
    where: FaqWhereUniqueInput
    create: XOR<FaqCreateWithoutTourInput, FaqUncheckedCreateWithoutTourInput>
  }

  export type FaqCreateManyTourInputEnvelope = {
    data: FaqCreateManyTourInput | FaqCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TourTypeCreateWithoutToursInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description?: string | null
    isActive?: boolean
    priority?: number
  }

  export type TourTypeUncheckedCreateWithoutToursInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    slug: string
    description?: string | null
    isActive?: boolean
    priority?: number
  }

  export type TourTypeCreateOrConnectWithoutToursInput = {
    where: TourTypeWhereUniqueInput
    create: XOR<TourTypeCreateWithoutToursInput, TourTypeUncheckedCreateWithoutToursInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutTourInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTourInput, ReviewUncheckedUpdateWithoutTourInput>
    create: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTourInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTourInput, ReviewUncheckedUpdateWithoutTourInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTourInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTourInput>
  }

  export type TripUpsertWithWhereUniqueWithoutTourInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutTourInput, TripUncheckedUpdateWithoutTourInput>
    create: XOR<TripCreateWithoutTourInput, TripUncheckedCreateWithoutTourInput>
  }

  export type TripUpdateWithWhereUniqueWithoutTourInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutTourInput, TripUncheckedUpdateWithoutTourInput>
  }

  export type TripUpdateManyWithWhereWithoutTourInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutTourInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: IntFilter<"Trip"> | number
    categoryId?: IntFilter<"Trip"> | number
    tourId?: IntFilter<"Trip"> | number
    thumbnailImageUrl?: StringFilter<"Trip"> | string
    thumbnailVideoUrl?: StringFilter<"Trip"> | string
    cardImageUrl?: StringFilter<"Trip"> | string
    isFeature?: BoolFilter<"Trip"> | boolean
    title?: StringFilter<"Trip"> | string
    slug?: StringFilter<"Trip"> | string
    inclusion?: StringFilter<"Trip"> | string
    exclusion?: StringFilter<"Trip"> | string
    notes?: StringFilter<"Trip"> | string
    startingPrice?: IntFilter<"Trip"> | number
    ItineraryLink?: StringFilter<"Trip"> | string
    ItineraryImageUrl?: StringFilter<"Trip"> | string
    About?: StringFilter<"Trip"> | string
  }

  export type FaqUpsertWithWhereUniqueWithoutTourInput = {
    where: FaqWhereUniqueInput
    update: XOR<FaqUpdateWithoutTourInput, FaqUncheckedUpdateWithoutTourInput>
    create: XOR<FaqCreateWithoutTourInput, FaqUncheckedCreateWithoutTourInput>
  }

  export type FaqUpdateWithWhereUniqueWithoutTourInput = {
    where: FaqWhereUniqueInput
    data: XOR<FaqUpdateWithoutTourInput, FaqUncheckedUpdateWithoutTourInput>
  }

  export type FaqUpdateManyWithWhereWithoutTourInput = {
    where: FaqScalarWhereInput
    data: XOR<FaqUpdateManyMutationInput, FaqUncheckedUpdateManyWithoutTourInput>
  }

  export type FaqScalarWhereInput = {
    AND?: FaqScalarWhereInput | FaqScalarWhereInput[]
    OR?: FaqScalarWhereInput[]
    NOT?: FaqScalarWhereInput | FaqScalarWhereInput[]
    id?: IntFilter<"Faq"> | number
    tourId?: IntFilter<"Faq"> | number
    question?: StringFilter<"Faq"> | string
    answer?: StringFilter<"Faq"> | string
    createdAt?: DateTimeFilter<"Faq"> | Date | string
    updatedAt?: DateTimeFilter<"Faq"> | Date | string
  }

  export type TourTypeUpsertWithoutToursInput = {
    update: XOR<TourTypeUpdateWithoutToursInput, TourTypeUncheckedUpdateWithoutToursInput>
    create: XOR<TourTypeCreateWithoutToursInput, TourTypeUncheckedCreateWithoutToursInput>
    where?: TourTypeWhereInput
  }

  export type TourTypeUpdateToOneWithWhereWithoutToursInput = {
    where?: TourTypeWhereInput
    data: XOR<TourTypeUpdateWithoutToursInput, TourTypeUncheckedUpdateWithoutToursInput>
  }

  export type TourTypeUpdateWithoutToursInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type TourTypeUncheckedUpdateWithoutToursInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type TourCreateWithoutTourTypeInput = {
    title: string
    slug: string
    about: string
    thumbnailImageUrl: string
    thumbnailVideoUrl?: string | null
    cardImageUrl: string
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutTourInput
    trips?: TripCreateNestedManyWithoutTourInput
    faq?: FaqCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutTourTypeInput = {
    id?: number
    title: string
    slug: string
    about: string
    thumbnailImageUrl: string
    thumbnailVideoUrl?: string | null
    cardImageUrl: string
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    trips?: TripUncheckedCreateNestedManyWithoutTourInput
    faq?: FaqUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutTourTypeInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutTourTypeInput, TourUncheckedCreateWithoutTourTypeInput>
  }

  export type TourCreateManyTourTypeInputEnvelope = {
    data: TourCreateManyTourTypeInput | TourCreateManyTourTypeInput[]
    skipDuplicates?: boolean
  }

  export type TourUpsertWithWhereUniqueWithoutTourTypeInput = {
    where: TourWhereUniqueInput
    update: XOR<TourUpdateWithoutTourTypeInput, TourUncheckedUpdateWithoutTourTypeInput>
    create: XOR<TourCreateWithoutTourTypeInput, TourUncheckedCreateWithoutTourTypeInput>
  }

  export type TourUpdateWithWhereUniqueWithoutTourTypeInput = {
    where: TourWhereUniqueInput
    data: XOR<TourUpdateWithoutTourTypeInput, TourUncheckedUpdateWithoutTourTypeInput>
  }

  export type TourUpdateManyWithWhereWithoutTourTypeInput = {
    where: TourScalarWhereInput
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyWithoutTourTypeInput>
  }

  export type TourScalarWhereInput = {
    AND?: TourScalarWhereInput | TourScalarWhereInput[]
    OR?: TourScalarWhereInput[]
    NOT?: TourScalarWhereInput | TourScalarWhereInput[]
    id?: IntFilter<"Tour"> | number
    title?: StringFilter<"Tour"> | string
    slug?: StringFilter<"Tour"> | string
    about?: StringFilter<"Tour"> | string
    thumbnailImageUrl?: StringFilter<"Tour"> | string
    thumbnailVideoUrl?: StringNullableFilter<"Tour"> | string | null
    cardImageUrl?: StringFilter<"Tour"> | string
    tourTypeId?: IntFilter<"Tour"> | number
    isActive?: BoolFilter<"Tour"> | boolean
    isFeatured?: BoolFilter<"Tour"> | boolean
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    updatedAt?: DateTimeFilter<"Tour"> | Date | string
  }

  export type CategoryCreateWithoutTripInput = {
    slug: string
    title: string
  }

  export type CategoryUncheckedCreateWithoutTripInput = {
    id?: number
    slug: string
    title: string
  }

  export type CategoryCreateOrConnectWithoutTripInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTripInput, CategoryUncheckedCreateWithoutTripInput>
  }

  export type TourCreateWithoutTripsInput = {
    title: string
    slug: string
    about: string
    thumbnailImageUrl: string
    thumbnailVideoUrl?: string | null
    cardImageUrl: string
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutTourInput
    faq?: FaqCreateNestedManyWithoutTourInput
    tourType: TourTypeCreateNestedOneWithoutToursInput
  }

  export type TourUncheckedCreateWithoutTripsInput = {
    id?: number
    title: string
    slug: string
    about: string
    thumbnailImageUrl: string
    thumbnailVideoUrl?: string | null
    cardImageUrl: string
    tourTypeId: number
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    faq?: FaqUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutTripsInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutTripsInput, TourUncheckedCreateWithoutTripsInput>
  }

  export type ItineraryCreateWithoutTripInput = {
    title: string
    description: string
    dayNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItineraryUncheckedCreateWithoutTripInput = {
    id?: number
    title: string
    description: string
    dayNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItineraryCreateOrConnectWithoutTripInput = {
    where: ItineraryWhereUniqueInput
    create: XOR<ItineraryCreateWithoutTripInput, ItineraryUncheckedCreateWithoutTripInput>
  }

  export type ItineraryCreateManyTripInputEnvelope = {
    data: ItineraryCreateManyTripInput | ItineraryCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type TripDateCreateWithoutTripInput = {
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    booking?: BookingCreateNestedManyWithoutTripDateInput
    pricing?: TripPricingCreateNestedManyWithoutTripDateInput
    bookingSession?: BookingSessionCreateNestedManyWithoutTripDateInput
  }

  export type TripDateUncheckedCreateWithoutTripInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    booking?: BookingUncheckedCreateNestedManyWithoutTripDateInput
    pricing?: TripPricingUncheckedCreateNestedManyWithoutTripDateInput
    bookingSession?: BookingSessionUncheckedCreateNestedManyWithoutTripDateInput
  }

  export type TripDateCreateOrConnectWithoutTripInput = {
    where: TripDateWhereUniqueInput
    create: XOR<TripDateCreateWithoutTripInput, TripDateUncheckedCreateWithoutTripInput>
  }

  export type TripDateCreateManyTripInputEnvelope = {
    data: TripDateCreateManyTripInput | TripDateCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type BookingSessionCreateWithoutTripInput = {
    id?: string
    seatCount: number
    status?: $Enums.BookingSessionStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingSessionInput
    tripDate: TripDateCreateNestedOneWithoutBookingSessionInput
  }

  export type BookingSessionUncheckedCreateWithoutTripInput = {
    id?: string
    userId: string
    tripDateId: number
    seatCount: number
    status?: $Enums.BookingSessionStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingSessionCreateOrConnectWithoutTripInput = {
    where: BookingSessionWhereUniqueInput
    create: XOR<BookingSessionCreateWithoutTripInput, BookingSessionUncheckedCreateWithoutTripInput>
  }

  export type BookingSessionCreateManyTripInputEnvelope = {
    data: BookingSessionCreateManyTripInput | BookingSessionCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutTripInput = {
    mobileNumber?: string | null
    status?: $Enums.BookingStatus
    totalAmount: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    tripDate: TripDateCreateNestedOneWithoutBookingInput
    items?: BookingItemCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutTripInput = {
    id?: number
    userId: string
    tripDateId: number
    mobileNumber?: string | null
    status?: $Enums.BookingStatus
    totalAmount: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: BookingItemUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutTripInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput>
  }

  export type BookingCreateManyTripInputEnvelope = {
    data: BookingCreateManyTripInput | BookingCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutTripInput = {
    update: XOR<CategoryUpdateWithoutTripInput, CategoryUncheckedUpdateWithoutTripInput>
    create: XOR<CategoryCreateWithoutTripInput, CategoryUncheckedCreateWithoutTripInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTripInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTripInput, CategoryUncheckedUpdateWithoutTripInput>
  }

  export type CategoryUpdateWithoutTripInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type TourUpsertWithoutTripsInput = {
    update: XOR<TourUpdateWithoutTripsInput, TourUncheckedUpdateWithoutTripsInput>
    create: XOR<TourCreateWithoutTripsInput, TourUncheckedCreateWithoutTripsInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutTripsInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutTripsInput, TourUncheckedUpdateWithoutTripsInput>
  }

  export type TourUpdateWithoutTripsInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    faq?: FaqUpdateManyWithoutTourNestedInput
    tourType?: TourTypeUpdateOneRequiredWithoutToursNestedInput
  }

  export type TourUncheckedUpdateWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    tourTypeId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    faq?: FaqUncheckedUpdateManyWithoutTourNestedInput
  }

  export type ItineraryUpsertWithWhereUniqueWithoutTripInput = {
    where: ItineraryWhereUniqueInput
    update: XOR<ItineraryUpdateWithoutTripInput, ItineraryUncheckedUpdateWithoutTripInput>
    create: XOR<ItineraryCreateWithoutTripInput, ItineraryUncheckedCreateWithoutTripInput>
  }

  export type ItineraryUpdateWithWhereUniqueWithoutTripInput = {
    where: ItineraryWhereUniqueInput
    data: XOR<ItineraryUpdateWithoutTripInput, ItineraryUncheckedUpdateWithoutTripInput>
  }

  export type ItineraryUpdateManyWithWhereWithoutTripInput = {
    where: ItineraryScalarWhereInput
    data: XOR<ItineraryUpdateManyMutationInput, ItineraryUncheckedUpdateManyWithoutTripInput>
  }

  export type ItineraryScalarWhereInput = {
    AND?: ItineraryScalarWhereInput | ItineraryScalarWhereInput[]
    OR?: ItineraryScalarWhereInput[]
    NOT?: ItineraryScalarWhereInput | ItineraryScalarWhereInput[]
    id?: IntFilter<"Itinerary"> | number
    tripId?: IntFilter<"Itinerary"> | number
    title?: StringFilter<"Itinerary"> | string
    description?: StringFilter<"Itinerary"> | string
    dayNumber?: IntFilter<"Itinerary"> | number
    createdAt?: DateTimeFilter<"Itinerary"> | Date | string
    updatedAt?: DateTimeFilter<"Itinerary"> | Date | string
  }

  export type TripDateUpsertWithWhereUniqueWithoutTripInput = {
    where: TripDateWhereUniqueInput
    update: XOR<TripDateUpdateWithoutTripInput, TripDateUncheckedUpdateWithoutTripInput>
    create: XOR<TripDateCreateWithoutTripInput, TripDateUncheckedCreateWithoutTripInput>
  }

  export type TripDateUpdateWithWhereUniqueWithoutTripInput = {
    where: TripDateWhereUniqueInput
    data: XOR<TripDateUpdateWithoutTripInput, TripDateUncheckedUpdateWithoutTripInput>
  }

  export type TripDateUpdateManyWithWhereWithoutTripInput = {
    where: TripDateScalarWhereInput
    data: XOR<TripDateUpdateManyMutationInput, TripDateUncheckedUpdateManyWithoutTripInput>
  }

  export type TripDateScalarWhereInput = {
    AND?: TripDateScalarWhereInput | TripDateScalarWhereInput[]
    OR?: TripDateScalarWhereInput[]
    NOT?: TripDateScalarWhereInput | TripDateScalarWhereInput[]
    id?: IntFilter<"TripDate"> | number
    tripId?: IntFilter<"TripDate"> | number
    startDate?: DateTimeFilter<"TripDate"> | Date | string
    endDate?: DateTimeFilter<"TripDate"> | Date | string
    createdAt?: DateTimeFilter<"TripDate"> | Date | string
  }

  export type BookingSessionUpsertWithWhereUniqueWithoutTripInput = {
    where: BookingSessionWhereUniqueInput
    update: XOR<BookingSessionUpdateWithoutTripInput, BookingSessionUncheckedUpdateWithoutTripInput>
    create: XOR<BookingSessionCreateWithoutTripInput, BookingSessionUncheckedCreateWithoutTripInput>
  }

  export type BookingSessionUpdateWithWhereUniqueWithoutTripInput = {
    where: BookingSessionWhereUniqueInput
    data: XOR<BookingSessionUpdateWithoutTripInput, BookingSessionUncheckedUpdateWithoutTripInput>
  }

  export type BookingSessionUpdateManyWithWhereWithoutTripInput = {
    where: BookingSessionScalarWhereInput
    data: XOR<BookingSessionUpdateManyMutationInput, BookingSessionUncheckedUpdateManyWithoutTripInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutTripInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutTripInput, BookingUncheckedUpdateWithoutTripInput>
    create: XOR<BookingCreateWithoutTripInput, BookingUncheckedCreateWithoutTripInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutTripInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutTripInput, BookingUncheckedUpdateWithoutTripInput>
  }

  export type BookingUpdateManyWithWhereWithoutTripInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutTripInput>
  }

  export type TripCreateWithoutTripDateInput = {
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
    category: CategoryCreateNestedOneWithoutTripInput
    tour: TourCreateNestedOneWithoutTripsInput
    Itinerary?: ItineraryCreateNestedManyWithoutTripInput
    bookingSession?: BookingSessionCreateNestedManyWithoutTripInput
    Booking?: BookingCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutTripDateInput = {
    id?: number
    categoryId: number
    tourId: number
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
    Itinerary?: ItineraryUncheckedCreateNestedManyWithoutTripInput
    bookingSession?: BookingSessionUncheckedCreateNestedManyWithoutTripInput
    Booking?: BookingUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutTripDateInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutTripDateInput, TripUncheckedCreateWithoutTripDateInput>
  }

  export type BookingCreateWithoutTripDateInput = {
    mobileNumber?: string | null
    status?: $Enums.BookingStatus
    totalAmount: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    trip: TripCreateNestedOneWithoutBookingInput
    items?: BookingItemCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutTripDateInput = {
    id?: number
    userId: string
    tripId: number
    mobileNumber?: string | null
    status?: $Enums.BookingStatus
    totalAmount: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: BookingItemUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutTripDateInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutTripDateInput, BookingUncheckedCreateWithoutTripDateInput>
  }

  export type BookingCreateManyTripDateInputEnvelope = {
    data: BookingCreateManyTripDateInput | BookingCreateManyTripDateInput[]
    skipDuplicates?: boolean
  }

  export type TripPricingCreateWithoutTripDateInput = {
    sharing: $Enums.SharingType
    price: number
  }

  export type TripPricingUncheckedCreateWithoutTripDateInput = {
    id?: number
    sharing: $Enums.SharingType
    price: number
  }

  export type TripPricingCreateOrConnectWithoutTripDateInput = {
    where: TripPricingWhereUniqueInput
    create: XOR<TripPricingCreateWithoutTripDateInput, TripPricingUncheckedCreateWithoutTripDateInput>
  }

  export type TripPricingCreateManyTripDateInputEnvelope = {
    data: TripPricingCreateManyTripDateInput | TripPricingCreateManyTripDateInput[]
    skipDuplicates?: boolean
  }

  export type BookingSessionCreateWithoutTripDateInput = {
    id?: string
    seatCount: number
    status?: $Enums.BookingSessionStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingSessionInput
    trip: TripCreateNestedOneWithoutBookingSessionInput
  }

  export type BookingSessionUncheckedCreateWithoutTripDateInput = {
    id?: string
    userId: string
    tripId: number
    seatCount: number
    status?: $Enums.BookingSessionStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingSessionCreateOrConnectWithoutTripDateInput = {
    where: BookingSessionWhereUniqueInput
    create: XOR<BookingSessionCreateWithoutTripDateInput, BookingSessionUncheckedCreateWithoutTripDateInput>
  }

  export type BookingSessionCreateManyTripDateInputEnvelope = {
    data: BookingSessionCreateManyTripDateInput | BookingSessionCreateManyTripDateInput[]
    skipDuplicates?: boolean
  }

  export type TripUpsertWithoutTripDateInput = {
    update: XOR<TripUpdateWithoutTripDateInput, TripUncheckedUpdateWithoutTripDateInput>
    create: XOR<TripCreateWithoutTripDateInput, TripUncheckedCreateWithoutTripDateInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutTripDateInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutTripDateInput, TripUncheckedUpdateWithoutTripDateInput>
  }

  export type TripUpdateWithoutTripDateInput = {
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutTripNestedInput
    tour?: TourUpdateOneRequiredWithoutTripsNestedInput
    Itinerary?: ItineraryUpdateManyWithoutTripNestedInput
    bookingSession?: BookingSessionUpdateManyWithoutTripNestedInput
    Booking?: BookingUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutTripDateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    Itinerary?: ItineraryUncheckedUpdateManyWithoutTripNestedInput
    bookingSession?: BookingSessionUncheckedUpdateManyWithoutTripNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutTripNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutTripDateInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutTripDateInput, BookingUncheckedUpdateWithoutTripDateInput>
    create: XOR<BookingCreateWithoutTripDateInput, BookingUncheckedCreateWithoutTripDateInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutTripDateInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutTripDateInput, BookingUncheckedUpdateWithoutTripDateInput>
  }

  export type BookingUpdateManyWithWhereWithoutTripDateInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutTripDateInput>
  }

  export type TripPricingUpsertWithWhereUniqueWithoutTripDateInput = {
    where: TripPricingWhereUniqueInput
    update: XOR<TripPricingUpdateWithoutTripDateInput, TripPricingUncheckedUpdateWithoutTripDateInput>
    create: XOR<TripPricingCreateWithoutTripDateInput, TripPricingUncheckedCreateWithoutTripDateInput>
  }

  export type TripPricingUpdateWithWhereUniqueWithoutTripDateInput = {
    where: TripPricingWhereUniqueInput
    data: XOR<TripPricingUpdateWithoutTripDateInput, TripPricingUncheckedUpdateWithoutTripDateInput>
  }

  export type TripPricingUpdateManyWithWhereWithoutTripDateInput = {
    where: TripPricingScalarWhereInput
    data: XOR<TripPricingUpdateManyMutationInput, TripPricingUncheckedUpdateManyWithoutTripDateInput>
  }

  export type TripPricingScalarWhereInput = {
    AND?: TripPricingScalarWhereInput | TripPricingScalarWhereInput[]
    OR?: TripPricingScalarWhereInput[]
    NOT?: TripPricingScalarWhereInput | TripPricingScalarWhereInput[]
    id?: IntFilter<"TripPricing"> | number
    tripDateId?: IntFilter<"TripPricing"> | number
    sharing?: EnumSharingTypeFilter<"TripPricing"> | $Enums.SharingType
    price?: IntFilter<"TripPricing"> | number
  }

  export type BookingSessionUpsertWithWhereUniqueWithoutTripDateInput = {
    where: BookingSessionWhereUniqueInput
    update: XOR<BookingSessionUpdateWithoutTripDateInput, BookingSessionUncheckedUpdateWithoutTripDateInput>
    create: XOR<BookingSessionCreateWithoutTripDateInput, BookingSessionUncheckedCreateWithoutTripDateInput>
  }

  export type BookingSessionUpdateWithWhereUniqueWithoutTripDateInput = {
    where: BookingSessionWhereUniqueInput
    data: XOR<BookingSessionUpdateWithoutTripDateInput, BookingSessionUncheckedUpdateWithoutTripDateInput>
  }

  export type BookingSessionUpdateManyWithWhereWithoutTripDateInput = {
    where: BookingSessionScalarWhereInput
    data: XOR<BookingSessionUpdateManyMutationInput, BookingSessionUncheckedUpdateManyWithoutTripDateInput>
  }

  export type TripCreateWithoutItineraryInput = {
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
    category: CategoryCreateNestedOneWithoutTripInput
    tour: TourCreateNestedOneWithoutTripsInput
    TripDate?: TripDateCreateNestedManyWithoutTripInput
    bookingSession?: BookingSessionCreateNestedManyWithoutTripInput
    Booking?: BookingCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutItineraryInput = {
    id?: number
    categoryId: number
    tourId: number
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
    TripDate?: TripDateUncheckedCreateNestedManyWithoutTripInput
    bookingSession?: BookingSessionUncheckedCreateNestedManyWithoutTripInput
    Booking?: BookingUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutItineraryInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutItineraryInput, TripUncheckedCreateWithoutItineraryInput>
  }

  export type TripUpsertWithoutItineraryInput = {
    update: XOR<TripUpdateWithoutItineraryInput, TripUncheckedUpdateWithoutItineraryInput>
    create: XOR<TripCreateWithoutItineraryInput, TripUncheckedCreateWithoutItineraryInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutItineraryInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutItineraryInput, TripUncheckedUpdateWithoutItineraryInput>
  }

  export type TripUpdateWithoutItineraryInput = {
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutTripNestedInput
    tour?: TourUpdateOneRequiredWithoutTripsNestedInput
    TripDate?: TripDateUpdateManyWithoutTripNestedInput
    bookingSession?: BookingSessionUpdateManyWithoutTripNestedInput
    Booking?: BookingUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutItineraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    TripDate?: TripDateUncheckedUpdateManyWithoutTripNestedInput
    bookingSession?: BookingSessionUncheckedUpdateManyWithoutTripNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateWithoutCategoryInput = {
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
    tour: TourCreateNestedOneWithoutTripsInput
    Itinerary?: ItineraryCreateNestedManyWithoutTripInput
    TripDate?: TripDateCreateNestedManyWithoutTripInput
    bookingSession?: BookingSessionCreateNestedManyWithoutTripInput
    Booking?: BookingCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutCategoryInput = {
    id?: number
    tourId: number
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
    Itinerary?: ItineraryUncheckedCreateNestedManyWithoutTripInput
    TripDate?: TripDateUncheckedCreateNestedManyWithoutTripInput
    bookingSession?: BookingSessionUncheckedCreateNestedManyWithoutTripInput
    Booking?: BookingUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutCategoryInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutCategoryInput, TripUncheckedCreateWithoutCategoryInput>
  }

  export type TripCreateManyCategoryInputEnvelope = {
    data: TripCreateManyCategoryInput | TripCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TripUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutCategoryInput, TripUncheckedUpdateWithoutCategoryInput>
    create: XOR<TripCreateWithoutCategoryInput, TripUncheckedCreateWithoutCategoryInput>
  }

  export type TripUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutCategoryInput, TripUncheckedUpdateWithoutCategoryInput>
  }

  export type TripUpdateManyWithWhereWithoutCategoryInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TripDateCreateWithoutPricingInput = {
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    trip: TripCreateNestedOneWithoutTripDateInput
    booking?: BookingCreateNestedManyWithoutTripDateInput
    bookingSession?: BookingSessionCreateNestedManyWithoutTripDateInput
  }

  export type TripDateUncheckedCreateWithoutPricingInput = {
    id?: number
    tripId: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    booking?: BookingUncheckedCreateNestedManyWithoutTripDateInput
    bookingSession?: BookingSessionUncheckedCreateNestedManyWithoutTripDateInput
  }

  export type TripDateCreateOrConnectWithoutPricingInput = {
    where: TripDateWhereUniqueInput
    create: XOR<TripDateCreateWithoutPricingInput, TripDateUncheckedCreateWithoutPricingInput>
  }

  export type TripDateUpsertWithoutPricingInput = {
    update: XOR<TripDateUpdateWithoutPricingInput, TripDateUncheckedUpdateWithoutPricingInput>
    create: XOR<TripDateCreateWithoutPricingInput, TripDateUncheckedCreateWithoutPricingInput>
    where?: TripDateWhereInput
  }

  export type TripDateUpdateToOneWithWhereWithoutPricingInput = {
    where?: TripDateWhereInput
    data: XOR<TripDateUpdateWithoutPricingInput, TripDateUncheckedUpdateWithoutPricingInput>
  }

  export type TripDateUpdateWithoutPricingInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutTripDateNestedInput
    booking?: BookingUpdateManyWithoutTripDateNestedInput
    bookingSession?: BookingSessionUpdateManyWithoutTripDateNestedInput
  }

  export type TripDateUncheckedUpdateWithoutPricingInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateManyWithoutTripDateNestedInput
    bookingSession?: BookingSessionUncheckedUpdateManyWithoutTripDateNestedInput
  }

  export type TourCreateWithoutFaqInput = {
    title: string
    slug: string
    about: string
    thumbnailImageUrl: string
    thumbnailVideoUrl?: string | null
    cardImageUrl: string
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutTourInput
    trips?: TripCreateNestedManyWithoutTourInput
    tourType: TourTypeCreateNestedOneWithoutToursInput
  }

  export type TourUncheckedCreateWithoutFaqInput = {
    id?: number
    title: string
    slug: string
    about: string
    thumbnailImageUrl: string
    thumbnailVideoUrl?: string | null
    cardImageUrl: string
    tourTypeId: number
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    trips?: TripUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutFaqInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutFaqInput, TourUncheckedCreateWithoutFaqInput>
  }

  export type TourUpsertWithoutFaqInput = {
    update: XOR<TourUpdateWithoutFaqInput, TourUncheckedUpdateWithoutFaqInput>
    create: XOR<TourCreateWithoutFaqInput, TourUncheckedCreateWithoutFaqInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutFaqInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutFaqInput, TourUncheckedUpdateWithoutFaqInput>
  }

  export type TourUpdateWithoutFaqInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    trips?: TripUpdateManyWithoutTourNestedInput
    tourType?: TourTypeUpdateOneRequiredWithoutToursNestedInput
  }

  export type TourUncheckedUpdateWithoutFaqInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    tourTypeId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    trips?: TripUncheckedUpdateManyWithoutTourNestedInput
  }

  export type UserCreateWithoutBookingSessionInput = {
    id: string
    name?: string | null
    email: string
    phone?: string | null
    imageUrl?: string | null
    password?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingSessionInput = {
    id: string
    name?: string | null
    email: string
    phone?: string | null
    imageUrl?: string | null
    password?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingSessionInput, UserUncheckedCreateWithoutBookingSessionInput>
  }

  export type TripCreateWithoutBookingSessionInput = {
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
    category: CategoryCreateNestedOneWithoutTripInput
    tour: TourCreateNestedOneWithoutTripsInput
    Itinerary?: ItineraryCreateNestedManyWithoutTripInput
    TripDate?: TripDateCreateNestedManyWithoutTripInput
    Booking?: BookingCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutBookingSessionInput = {
    id?: number
    categoryId: number
    tourId: number
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
    Itinerary?: ItineraryUncheckedCreateNestedManyWithoutTripInput
    TripDate?: TripDateUncheckedCreateNestedManyWithoutTripInput
    Booking?: BookingUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutBookingSessionInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutBookingSessionInput, TripUncheckedCreateWithoutBookingSessionInput>
  }

  export type TripDateCreateWithoutBookingSessionInput = {
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    trip: TripCreateNestedOneWithoutTripDateInput
    booking?: BookingCreateNestedManyWithoutTripDateInput
    pricing?: TripPricingCreateNestedManyWithoutTripDateInput
  }

  export type TripDateUncheckedCreateWithoutBookingSessionInput = {
    id?: number
    tripId: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    booking?: BookingUncheckedCreateNestedManyWithoutTripDateInput
    pricing?: TripPricingUncheckedCreateNestedManyWithoutTripDateInput
  }

  export type TripDateCreateOrConnectWithoutBookingSessionInput = {
    where: TripDateWhereUniqueInput
    create: XOR<TripDateCreateWithoutBookingSessionInput, TripDateUncheckedCreateWithoutBookingSessionInput>
  }

  export type UserUpsertWithoutBookingSessionInput = {
    update: XOR<UserUpdateWithoutBookingSessionInput, UserUncheckedUpdateWithoutBookingSessionInput>
    create: XOR<UserCreateWithoutBookingSessionInput, UserUncheckedCreateWithoutBookingSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingSessionInput, UserUncheckedUpdateWithoutBookingSessionInput>
  }

  export type UserUpdateWithoutBookingSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripUpsertWithoutBookingSessionInput = {
    update: XOR<TripUpdateWithoutBookingSessionInput, TripUncheckedUpdateWithoutBookingSessionInput>
    create: XOR<TripCreateWithoutBookingSessionInput, TripUncheckedCreateWithoutBookingSessionInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutBookingSessionInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutBookingSessionInput, TripUncheckedUpdateWithoutBookingSessionInput>
  }

  export type TripUpdateWithoutBookingSessionInput = {
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutTripNestedInput
    tour?: TourUpdateOneRequiredWithoutTripsNestedInput
    Itinerary?: ItineraryUpdateManyWithoutTripNestedInput
    TripDate?: TripDateUpdateManyWithoutTripNestedInput
    Booking?: BookingUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutBookingSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    Itinerary?: ItineraryUncheckedUpdateManyWithoutTripNestedInput
    TripDate?: TripDateUncheckedUpdateManyWithoutTripNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripDateUpsertWithoutBookingSessionInput = {
    update: XOR<TripDateUpdateWithoutBookingSessionInput, TripDateUncheckedUpdateWithoutBookingSessionInput>
    create: XOR<TripDateCreateWithoutBookingSessionInput, TripDateUncheckedCreateWithoutBookingSessionInput>
    where?: TripDateWhereInput
  }

  export type TripDateUpdateToOneWithWhereWithoutBookingSessionInput = {
    where?: TripDateWhereInput
    data: XOR<TripDateUpdateWithoutBookingSessionInput, TripDateUncheckedUpdateWithoutBookingSessionInput>
  }

  export type TripDateUpdateWithoutBookingSessionInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutTripDateNestedInput
    booking?: BookingUpdateManyWithoutTripDateNestedInput
    pricing?: TripPricingUpdateManyWithoutTripDateNestedInput
  }

  export type TripDateUncheckedUpdateWithoutBookingSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateManyWithoutTripDateNestedInput
    pricing?: TripPricingUncheckedUpdateManyWithoutTripDateNestedInput
  }

  export type BookingCreateWithoutItemsInput = {
    mobileNumber?: string | null
    status?: $Enums.BookingStatus
    totalAmount: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    trip: TripCreateNestedOneWithoutBookingInput
    tripDate: TripDateCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutItemsInput = {
    id?: number
    userId: string
    tripId: number
    tripDateId: number
    mobileNumber?: string | null
    status?: $Enums.BookingStatus
    totalAmount: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutItemsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutItemsInput, BookingUncheckedCreateWithoutItemsInput>
  }

  export type BookingUpsertWithoutItemsInput = {
    update: XOR<BookingUpdateWithoutItemsInput, BookingUncheckedUpdateWithoutItemsInput>
    create: XOR<BookingCreateWithoutItemsInput, BookingUncheckedCreateWithoutItemsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutItemsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutItemsInput, BookingUncheckedUpdateWithoutItemsInput>
  }

  export type BookingUpdateWithoutItemsInput = {
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    trip?: TripUpdateOneRequiredWithoutBookingNestedInput
    tripDate?: TripDateUpdateOneRequiredWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    tripDateId?: IntFieldUpdateOperationsInput | number
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSessionCreateManyUserInput = {
    id?: string
    tripId: number
    tripDateId: number
    seatCount: number
    status?: $Enums.BookingSessionStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyUserInput = {
    id?: number
    tripId: number
    tripDateId: number
    mobileNumber?: string | null
    status?: $Enums.BookingStatus
    totalAmount: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    rating: number
    tourId: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingSessionStatusFieldUpdateOperationsInput | $Enums.BookingSessionStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutBookingSessionNestedInput
    tripDate?: TripDateUpdateOneRequiredWithoutBookingSessionNestedInput
  }

  export type BookingSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    tripDateId?: IntFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingSessionStatusFieldUpdateOperationsInput | $Enums.BookingSessionStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    tripDateId?: IntFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingSessionStatusFieldUpdateOperationsInput | $Enums.BookingSessionStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutBookingNestedInput
    tripDate?: TripDateUpdateOneRequiredWithoutBookingNestedInput
    items?: BookingItemUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    tripDateId?: IntFieldUpdateOperationsInput | number
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BookingItemUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    tripDateId?: IntFieldUpdateOperationsInput | number
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingItemCreateManyBookingInput = {
    id?: number
    sharingType: $Enums.SharingType
    quantity: number
    pricePerPerson: number
    subtotal: number
  }

  export type BookingItemUpdateWithoutBookingInput = {
    sharingType?: EnumSharingTypeFieldUpdateOperationsInput | $Enums.SharingType
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerPerson?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type BookingItemUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    sharingType?: EnumSharingTypeFieldUpdateOperationsInput | $Enums.SharingType
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerPerson?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type BookingItemUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    sharingType?: EnumSharingTypeFieldUpdateOperationsInput | $Enums.SharingType
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerPerson?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyTourInput = {
    id?: number
    rating: number
    userId: string
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripCreateManyTourInput = {
    id?: number
    categoryId: number
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
  }

  export type FaqCreateManyTourInput = {
    id?: number
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutTourInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUpdateWithoutTourInput = {
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutTripNestedInput
    Itinerary?: ItineraryUpdateManyWithoutTripNestedInput
    TripDate?: TripDateUpdateManyWithoutTripNestedInput
    bookingSession?: BookingSessionUpdateManyWithoutTripNestedInput
    Booking?: BookingUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    Itinerary?: ItineraryUncheckedUpdateManyWithoutTripNestedInput
    TripDate?: TripDateUncheckedUpdateManyWithoutTripNestedInput
    bookingSession?: BookingSessionUncheckedUpdateManyWithoutTripNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
  }

  export type FaqUpdateWithoutTourInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqUncheckedUpdateWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqUncheckedUpdateManyWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourCreateManyTourTypeInput = {
    id?: number
    title: string
    slug: string
    about: string
    thumbnailImageUrl: string
    thumbnailVideoUrl?: string | null
    cardImageUrl: string
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourUpdateWithoutTourTypeInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    trips?: TripUpdateManyWithoutTourNestedInput
    faq?: FaqUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutTourTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    trips?: TripUncheckedUpdateManyWithoutTourNestedInput
    faq?: FaqUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateManyWithoutTourTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItineraryCreateManyTripInput = {
    id?: number
    title: string
    description: string
    dayNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripDateCreateManyTripInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type BookingSessionCreateManyTripInput = {
    id?: string
    userId: string
    tripDateId: number
    seatCount: number
    status?: $Enums.BookingSessionStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyTripInput = {
    id?: number
    userId: string
    tripDateId: number
    mobileNumber?: string | null
    status?: $Enums.BookingStatus
    totalAmount: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItineraryUpdateWithoutTripInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItineraryUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItineraryUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dayNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripDateUpdateWithoutTripInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateManyWithoutTripDateNestedInput
    pricing?: TripPricingUpdateManyWithoutTripDateNestedInput
    bookingSession?: BookingSessionUpdateManyWithoutTripDateNestedInput
  }

  export type TripDateUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateManyWithoutTripDateNestedInput
    pricing?: TripPricingUncheckedUpdateManyWithoutTripDateNestedInput
    bookingSession?: BookingSessionUncheckedUpdateManyWithoutTripDateNestedInput
  }

  export type TripDateUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSessionUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingSessionStatusFieldUpdateOperationsInput | $Enums.BookingSessionStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingSessionNestedInput
    tripDate?: TripDateUpdateOneRequiredWithoutBookingSessionNestedInput
  }

  export type BookingSessionUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripDateId?: IntFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingSessionStatusFieldUpdateOperationsInput | $Enums.BookingSessionStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSessionUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripDateId?: IntFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingSessionStatusFieldUpdateOperationsInput | $Enums.BookingSessionStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutTripInput = {
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    tripDate?: TripDateUpdateOneRequiredWithoutBookingNestedInput
    items?: BookingItemUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tripDateId?: IntFieldUpdateOperationsInput | number
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BookingItemUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tripDateId?: IntFieldUpdateOperationsInput | number
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyTripDateInput = {
    id?: number
    userId: string
    tripId: number
    mobileNumber?: string | null
    status?: $Enums.BookingStatus
    totalAmount: number
    totalSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPricingCreateManyTripDateInput = {
    id?: number
    sharing: $Enums.SharingType
    price: number
  }

  export type BookingSessionCreateManyTripDateInput = {
    id?: string
    userId: string
    tripId: number
    seatCount: number
    status?: $Enums.BookingSessionStatus
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutTripDateInput = {
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    trip?: TripUpdateOneRequiredWithoutBookingNestedInput
    items?: BookingItemUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutTripDateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BookingItemUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutTripDateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPricingUpdateWithoutTripDateInput = {
    sharing?: EnumSharingTypeFieldUpdateOperationsInput | $Enums.SharingType
    price?: IntFieldUpdateOperationsInput | number
  }

  export type TripPricingUncheckedUpdateWithoutTripDateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sharing?: EnumSharingTypeFieldUpdateOperationsInput | $Enums.SharingType
    price?: IntFieldUpdateOperationsInput | number
  }

  export type TripPricingUncheckedUpdateManyWithoutTripDateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sharing?: EnumSharingTypeFieldUpdateOperationsInput | $Enums.SharingType
    price?: IntFieldUpdateOperationsInput | number
  }

  export type BookingSessionUpdateWithoutTripDateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingSessionStatusFieldUpdateOperationsInput | $Enums.BookingSessionStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingSessionNestedInput
    trip?: TripUpdateOneRequiredWithoutBookingSessionNestedInput
  }

  export type BookingSessionUncheckedUpdateWithoutTripDateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingSessionStatusFieldUpdateOperationsInput | $Enums.BookingSessionStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSessionUncheckedUpdateManyWithoutTripDateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingSessionStatusFieldUpdateOperationsInput | $Enums.BookingSessionStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateManyCategoryInput = {
    id?: number
    tourId: number
    thumbnailImageUrl: string
    thumbnailVideoUrl: string
    cardImageUrl: string
    isFeature?: boolean
    title: string
    slug: string
    inclusion: string
    exclusion: string
    notes: string
    startingPrice: number
    ItineraryLink: string
    ItineraryImageUrl: string
    About?: string
  }

  export type TripUpdateWithoutCategoryInput = {
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    tour?: TourUpdateOneRequiredWithoutTripsNestedInput
    Itinerary?: ItineraryUpdateManyWithoutTripNestedInput
    TripDate?: TripDateUpdateManyWithoutTripNestedInput
    bookingSession?: BookingSessionUpdateManyWithoutTripNestedInput
    Booking?: BookingUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
    Itinerary?: ItineraryUncheckedUpdateManyWithoutTripNestedInput
    TripDate?: TripDateUncheckedUpdateManyWithoutTripNestedInput
    bookingSession?: BookingSessionUncheckedUpdateManyWithoutTripNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    thumbnailImageUrl?: StringFieldUpdateOperationsInput | string
    thumbnailVideoUrl?: StringFieldUpdateOperationsInput | string
    cardImageUrl?: StringFieldUpdateOperationsInput | string
    isFeature?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    inclusion?: StringFieldUpdateOperationsInput | string
    exclusion?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    startingPrice?: IntFieldUpdateOperationsInput | number
    ItineraryLink?: StringFieldUpdateOperationsInput | string
    ItineraryImageUrl?: StringFieldUpdateOperationsInput | string
    About?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}