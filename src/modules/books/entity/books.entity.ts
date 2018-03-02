import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Books {
  @PrimaryGeneratedColumn('uuid')
  book_id: string

  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  genre: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  author: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  publisher: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  pages: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  img_url: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  buy_url: string;
}