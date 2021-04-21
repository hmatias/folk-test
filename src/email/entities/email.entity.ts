import { Contact } from '../../contact/entities/contact.entity';
import { DefaultDate } from '../../utils/defaultDate.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('email')
export class Email extends DefaultDate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  value: string;

  @Column({ default: false })
  isPrimary: boolean;

  @ManyToOne(() => Contact, (contact) => contact.email, {
    onDelete: 'CASCADE',
  })
  contact: Contact;
}
