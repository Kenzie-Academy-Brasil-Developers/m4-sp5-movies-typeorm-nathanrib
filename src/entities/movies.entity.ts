import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

 

@Entity("movies")

class Movie {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length:60, unique:true})
    name: string

    @Column({type:'text', nullable: true})
    description?: string | undefined | null

    @Column()
    duration: number

    @Column()
    price: number

 }


 export {
    Movie
 }

 //id, name, description, duration, price