// Copyright © 2022 Kaleido, Inc.
//
// SPDX-License-Identifier: Apache-2.0
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { ApiProperty } from '@nestjs/swagger';

export interface EventStream {
  id: string;
  name: string;
}

export interface EventStreamSubscription {
  id: string;
  name: string;
  stream: string;
}

export interface TokenCreateEvent extends Event {
  data: {
    data: string;
    contract_address: string;
    name: string;
    operator: string;
    symbol: string;
  };
}

export interface TransferEvent extends Event {
  data: {
    from: string;
    to: string;
    value: string;
  };
}

export interface Event {
  subId: string;
  signature: string;
  address: string;
  operator: string;
  blockNumber: string;
  transactionIndex: string;
  transactionHash: string;
  logIndex: string;
  timestamp: string;
  data: any;
  inputMethod?: string;
  inputArgs?: Record<string, any>;
}

export class EventStreamReplyHeaders {
  @ApiProperty()
  type: string;

  @ApiProperty()
  requestId: string;
}

export class EventStreamReply {
  @ApiProperty()
  headers: EventStreamReplyHeaders;

  @ApiProperty()
  transactionHash: string;

  @ApiProperty()
  errorMessage?: string;
}
