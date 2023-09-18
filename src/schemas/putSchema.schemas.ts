import { idlessRegistry } from "@/protocols/Registry";
import joi from "joi";

const putSchema = joi.object<idlessRegistry>().keys({
    name: joi.string().max(256).optional(),
    phone: joi.string().min(11).max(11).optional(),
    email: joi.string().email().optional()
});

export default putSchema;