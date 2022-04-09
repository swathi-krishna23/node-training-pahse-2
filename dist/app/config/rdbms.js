"use strict";
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const config = {
    local: {
        database: process.env.POSTGRES_DB,
        entities: [
            "dist/app/entities/*{.ts,.js}",
        ],
        extra: { max: 5, min: 2 },
        host: process.env.POSTGRES_HOST,
        password: process.env.POSTGRES_PASSWORD,
        port: Number(process.env.POSTGRES_PORT),
        synchronize: false,
        logging: true,
        type: "postgres",
        username: process.env.POSTGRES_USER,
        namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
        migrations: ["dist/migrations/*.js"],
        cli: {
            migrationsDir: "src/migrations"
        }
    }
};
const getRDBMSConfig = (env) => {
    if (env === "local") {
        return config.local;
    }
    const configuration = config[env];
    return configuration;
};
const rdbmsConfig = getRDBMSConfig(process.env.NODE_ENV);
module.exports = rdbmsConfig;
//# sourceMappingURL=rdbms.js.map