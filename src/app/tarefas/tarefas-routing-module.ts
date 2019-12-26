import { Routes} from '@angular/router';
import { ListarTarefaComponent } from './listar';

export const TarefaRoutes: Routes = [
    {
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    }
];
