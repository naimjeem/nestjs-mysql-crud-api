export const ENV = {
  database: {
    type: 'mysql',
    host: '127.0.0.1',
    port: 8889,
    username: 'root',
    password: 'root',
    database: 'nestjs_books_api',
    entities: [__dirname + '/../**/*.entity{.ts, .js}'],
    synchroniz: true
  }
}