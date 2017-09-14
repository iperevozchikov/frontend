import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsComponent } from '../../shared/components/details.component';
import { RelationModel } from '../../core/models/relation-model';
import { AdminRelationService } from '../../core/services/admin-relation.service';
import { BreadcrumbService } from '../../core/services/breadcrumb.service';
import { ProjectModel } from '../../core/models/project-model';
import { AdminProjectService } from '../../core/services/admin-project.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  moduleId: module.id,
  selector: 'bs-project-relation-details',
  templateUrl: `project-relation-details.component.html`
})
export class AdminProjectRelationDetailsComponent extends DetailsComponent<RelationModel> implements OnInit {
  constructor(service: AdminRelationService,
              route: ActivatedRoute,
              router: Router,
              breadcrumbService: BreadcrumbService,
              notificationService: NotificationService,
              protected _projectService: AdminProjectService) {
    super(service, route, router, breadcrumbService, notificationService);

    this._returnPath = `/admin/projects`;

    if (this._model) {
      this._returnPath = `/admin/projects/${this._model.projectId}`;
    }
  }

  protected _fillBreadcrumbs(model: RelationModel) {
    this._projectService.get(model.projectId).subscribe((project: ProjectModel) => {
      let breadcrumbs = [];

      breadcrumbs.push({ label: project.name, url: `/admin/projects/${project.id}` });
      breadcrumbs.push({ label: 'T_PROJECT_RELATION_DETAILS' });

      this._breadcrumbService.overrideBreadcrumb(breadcrumbs);
    });
  }
}

