import { idlessRegistry } from "@/protocols/Registry";
import joi from "joi";

const postSchema = joi.object<idlessRegistry>().keys({
        name: joi.string().min(3).max(256).required(),
        phone: joi.string().min(11).max(11).required(),
        email: joi.string().email().required()
});

export default postSchema;