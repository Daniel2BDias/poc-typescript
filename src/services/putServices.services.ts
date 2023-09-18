import { getRepos } from "@/repositories/getRepos.repositories";
import { putRepos } from "@/repositories/putRepos.repositories";

export default async function putServices(id: string, name: string, phone: string, email: string): Promise<void> {
    const checkForRegisters = await getRepos.getOneRepo(id);
    if(Number(checkForRegisters?.id) !== Number(id)) {
        throw new Error("NotFound");
    }   
    
    if (!name && !phone) await putRepos.putEmail(id, email);
    
    if (!name && !email) await putRepos.putPhone(id, phone);
    
    if (!phone && !email) await putRepos.putName(id, name);

    if (!name) await putRepos.putPhoneAndEmail(id, phone, email);

    if (!phone) await putRepos.putNameAndEmail(id, name, email);

    if (!email) await putRepos.putNameAndPhone(id, name, phone);

    if (name && phone && email) await putRepos.putAll(id, name, phone, email);
};