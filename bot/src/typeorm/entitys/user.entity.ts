import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int', {
    nullable: false,
  })
  tgId: number;

  @Column('boolean', {
    nullable: false,
  })
  isBot: boolean;

  @Column()
  firstName: string;

  @Column()
  userName: string;

  @Column({
    nullable: false,
    default: 'ru',
  })
  languageCode: string;

  @Column('boolean', {
    nullable: false,
    default: false,
  })
  isPremium: boolean;
}
