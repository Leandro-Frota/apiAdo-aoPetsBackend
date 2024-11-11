import { prismaClient } from "../database/PrismaClient.js";

export class QueryController{
    
    // Exemplo de Consulta : Gatos disponiveis com 5 anos de idade.
    // http://localhost:3000/api/pets?species=Cat&age=5&status=Available
    
    async getPets (req, res) {
        const { species, age, status } = req.query;
      
        try {
          const pets = await prisma.pet.findMany({
            where: {
              species: species || undefined,
              age: age ? parseInt(age) : undefined,
              status: status || undefined
            },
            select: {
              name: true,
              species: true,
              age: true,
              description: true,
              status: true
            }
          });
      
          res.json(pets);
        } catch (error) {
          console.error(error);
          res.status(500).send('Error fetching pets');
        }
      };
}