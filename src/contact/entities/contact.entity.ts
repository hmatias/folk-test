import { Email } from '../../email/entities/email.entity';
import { DefaultDate } from '../../utils/defaultDate.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CustomField } from '../../custom-field/entities/customField.entity';

@Entity('contact')
export class Contact extends DefaultDate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  pFirstname: string;

  @Column({ nullable: true })
  pLastname: string;

  @Column({ nullable: true })
  cName: string;

  @OneToMany(() => Email, (email) => email.contact, {
    cascade: true,
    eager: true,
  })
  email: Email[];

  @OneToMany(() => CustomField, (cf) => cf.contact, {
    cascade: true,
    eager: true,
  })
  customField: CustomField[];
}
