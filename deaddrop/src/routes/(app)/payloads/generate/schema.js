import { z } from "zod";

export const formSchema = z.object({
    name: z.string().max(100),
    hostname: z.string().max(100),
    address: z.string().max(32),
    is_virtual: z.boolean(),
    agent: z.coerce.number(), // int bc of https://docs.djangoproject.com/en/4.0/topics/db/models/#automatic-primary-key-fields
    protocols: z.string(),
    encryption_key: z.string(),
    hmac_key: z.string(),
    agent_cfg: z.string(),
    upstream_connections: z.string(),
    downstream_connections: z.string(),
    

    min_cost: z.coerce.number().nullish().default(),
    max_cost: z.coerce.number().nonnegative().int().finite().safe().nullish().default(),
    avg_cost: z.coerce.number().nonnegative().finite().safe().nullish().default(),
    from_city: z.string(),
    to_city: z.string(),
    from_airport: z.string().toUpperCase().max(3).nullish().default(),
    to_airport: z.string().toUpperCase().max(3).nullish().default(),
    airline: z.string(),
    flight_code: z.string(),
    date_first_checked: z.string().nullish().or(z.string().max(0)),
    date_last_checked: z.string().nullish().or(z.string().max(0)),
    date_of_flight: z.string().nullish().or(z.string().max(0)),
    day_of_flight: z.string().max(9)
});