import postRepo from "@/repositories/postRepos.repostirories";

export default async function postServices (name: string, phone: string, email: string): Promise<void> {
    const postRepoAcess = await postRepo(name, phone, email)
};