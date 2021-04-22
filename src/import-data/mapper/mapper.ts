import { CreateContactDTO } from '../..//contact/dto/createContactDTO';
import { CustomFieldDTO } from '../../custom-field/dto/customFieldDTO';
import { CreateEmailDTO } from '../..//email/dto/createEmailDTO';

export class Mapper {
  convertToMail(email: string): CreateEmailDTO {
    const newEmail: CreateEmailDTO = new CreateEmailDTO();
    newEmail.value = email;
    newEmail.isPrimary = false;
    return newEmail;
  }

  convertToCF(name: string, value: string) {
    const customField: CustomFieldDTO = new CustomFieldDTO();
    customField.name = name;
    customField.value = value;
    return customField;
  }

  async createDTO(row, mapping: JSON): Promise<CreateContactDTO> {
    const contactDTO: CreateContactDTO = new CreateContactDTO();

    for (const k in mapping) {
      if (k === 'email') {
        mapping[k].split(',').map((index) => {
          if (row[index].length)
            contactDTO.email.push(this.convertToMail(row[index]));
        });
      } else if (!(k in contactDTO)) {
        contactDTO.customField.push(this.convertToCF(k, row[mapping[k]]));
      } else {
        contactDTO[k] = row[mapping[k]];
      }
    }

    return contactDTO;
  }
}
