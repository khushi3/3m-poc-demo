import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import { Http } from '@angular/http';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider,private http:Http) {
  }

  getData() {
    
    return this.http.get('http://172.16.103.25:8080/ElasticSearchClient/elk/statusChart')
                    .map(response => response.json());

   /* let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'New Visits',
        stats: '57,820',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Purchases',
        stats: '$ 89,745',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'Active Users',
        stats: '178,391',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'Returned',
        stats: '32,592',
        icon: 'refresh',
      }
    ];*/
  }
}
