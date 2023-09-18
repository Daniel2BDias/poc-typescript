import postRepo from "@/repositories/postRepos.repostirories";

export default async function postServices (name, phone, email): Promise<void> {
    const postRepoAcess = await postRepo(name, phone, email)
};