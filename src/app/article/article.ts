/*
 * Copyright 2019-2020 Elypia CIC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface Article {
  id: number;
  title: string;
  content: string;
  tags: string[];
  createdDate: Date;
  modifiedDate?: Date;
}

export interface ArticleComment {
  id: number;
  newsId: number;
  parentCommentId?: number;
  userId: number;
  content: string;
  createdDate: Date;
  upvotes: number;
}
