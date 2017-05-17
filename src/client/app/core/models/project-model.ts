import { Defaults } from '../decorators/defaults.decorator';
import { EmailKind, Recipient } from './email-template-model';
import { GroupModel } from './group-model';
import { Model, ModelId } from './model';

export interface IEmailTemplate {
  templateId?: ModelId;
  template: {
    id: string;
    name: string;
  };
  kind: EmailKind;
  recipient: Recipient;
}

@Defaults({
  name: '',
  groupAuditorId: null,
  templates: []
})
export class ProjectModel extends Model {
  public name: string;
  public description: string;
  public groupAuditorId?: ModelId;
  public groupAuditor?: GroupModel;
  public templates: IEmailTemplate[];

  constructor(json: any) {
    super(json);

    this.templates.forEach(item => {
      if (item.template) {
        item.templateId = item.template.id;
      }
    });
  }
}
