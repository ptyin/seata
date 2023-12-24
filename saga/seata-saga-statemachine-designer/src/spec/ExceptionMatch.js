/*
 *  Copyright 1999-2019 Seata.io Group.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import Transition from './Transition';

export default class ExceptionMatch extends Transition {
  constructor() {
    super();
    this.Exceptions = [];
  }

  importJson(json) {
    super.importJson(json);
    this.Exceptions = json.Exceptions;
  }

  exportJson() {
    const json = super.exportJson();
    json.style.source = this.style.source.host.businessObject.Name;
    return json;
  }
}

ExceptionMatch.prototype.Type = 'ExceptionMatch';

ExceptionMatch.prototype.THUMBNAIL_CLASS = 'bpmn-icon-connection';