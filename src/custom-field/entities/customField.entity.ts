import { DefaultDate } from '../../utils/defaultDate.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Contact } from '../../contact/entities/contact.entity';

@Entity('customfield')
export class CustomField extends DefaultDate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  value: string;

  @ManyToOne(() => Contact, (contact) => contact.customField, {
    onDelete: 'CASCADE',
  })
  contact: Contact;
}
