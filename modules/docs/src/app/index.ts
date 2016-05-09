export {environment} from './environment';
export {SiteAppComponent} from './site.component';
// TODO(jd): auto generate import/exports for examples during the grunt site-meta task.

import CardBasicUsage from './components/card/basic_usage';
import CardInlineActions from './components/card/inline_actions';
import ButtonBasicUsage from './components/button/basic_usage';
import CardActionButtons from './components/card/action_buttons';
import DataTableBasicUsage from './components/data_table/basic_usage';
import DataTableSelectableUsage from './components/data_table/selectable_usage';
import DialogBasicUsage from './components/dialog/basic_usage';
import ToolbarBasicUsage from './components/toolbar/basic_usage';
import ProgressBarBasicUsage from './components/progress_bar/basic_usage';
import ProgressCircleBasicUsage from './components/progress_circle/basic_usage';
import RadioBasicUsage from './components/radio/basic_usage';
import SwitchBasicUsage from './components/switch/basic_usage';
import TabsDynamicHeight from './components/tabs/dynamic_height';
import TabsDynamicTabs from './components/tabs/dynamic_tabs';
import CheckboxBasicUsage from './components/checkbox/basic_usage';
import CheckboxSyncing from './components/checkbox/syncing';
import ListBasicUsage from './components/list/basic_usage';
import InputBasicUsage from './components/input/basic_usage';
import InputFormBuilder from './components/input/form_builder';
import WhiteframeBasicUsage from './components/whiteframe/basic_usage';
import SidenavBasicUsage from './components/sidenav/basic_usage';
import {ComponentsService, NavigationService, VersionService} from './shared';

/**
 * Collection of Material Design component example directives.
 */
export const DEMO_DIRECTIVES: any[] = [
  CardBasicUsage,      CardInlineActions,     CardActionButtons,        ButtonBasicUsage,
  CheckboxBasicUsage,  CheckboxSyncing,       DataTableBasicUsage,      DataTableSelectableUsage,
  DialogBasicUsage,    InputBasicUsage,       InputFormBuilder,         ListBasicUsage,
  RadioBasicUsage,     SwitchBasicUsage,      TabsDynamicHeight,        TabsDynamicTabs,
  ToolbarBasicUsage,   ProgressBarBasicUsage, ProgressCircleBasicUsage, SidenavBasicUsage,
  WhiteframeBasicUsage
];


/**
 * Describe an example that can be dynamically loaded.
 */
export interface IExampleData {
  template: string;
  source: string;
  styles: string;
  component: string;
  name: string;
}

/**
 * Collection of providers for example app
 */
export const DEMO_PROVIDERS: any[] = [ComponentsService, NavigationService, VersionService];


export * from './components/example';
export * from './components/highlight';