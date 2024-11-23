import { prismaClient } from "../database/PrismaClient.js";

export class adoptPetController {

    // Criar um novo adotante
    async registerAdopter(req, res){
    const { name, email, phone, address } = req.body;

    const adopter = await prismaClient.adopter.findFirst({where:{email}})

    if(adopter){
        return res.status(501).json("Adopter yet registered")
    }
    try {
        const adopter = await prismaClient.adopter.create({
        data: { name, email, phone, address},
        });
        res.status(201).json(adopter);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
    }
    // Listar todos os adotantes
    async getAdopter (req, res){
        try{
            const adopter = await prismaClient.adopter.findMany();
            return res.status(200).json(adopter);
        }catch(error){
            return res.status(500).json({error: error.message});
        }
    }

    // Buscar um adotante por ID
    async getAdopterById (req, res){
    const { id } = req.params;
        try{
            const adopter = await prismaClient.adopter.findMany({ where: { id } });
            return res.status(200).json(adopter)        
        }catch(error){
            return res.status(500).json({error: error.message})
        }
    }

    // Atualizar um adotante
    async updateAdopter (req, res){
        const { id } = req.params;
        const { name, email, phone, address } = req.body;
        try{
            const adopter = await prismaClient.adopter.update({
            where: { id},
            data: { name, email, phone, address}
            });
            return res.status(200).json(adopter);
        }catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    // Deletar um adotante
    async deleteAdopter (req, res){
        const { id } = req.params;
        try{
            await prismaClient.adopter.delete({ where: { id} });
            res.status(200).send('Adopter deleted');
        }catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

}




