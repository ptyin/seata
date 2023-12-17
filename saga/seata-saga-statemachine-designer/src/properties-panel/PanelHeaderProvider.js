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

export default {

  getElementLabel: (element) => {
    return element.name;
  },

  getElementIcon: (element) => {
    // eslint-disable-next-line react/react-in-jsx-scope
    return () => <span className={element?.businessObject?.THUMBNAIL_CLASS} />;
  },

  getTypeLabel: (element) => {
    return element?.type?.replace(/(\B[A-Z])/g, ' $1').replace(/(\bNon Interrupting)/g, '($1)');
  },
};