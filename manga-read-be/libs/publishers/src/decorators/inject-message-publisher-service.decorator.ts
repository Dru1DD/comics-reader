import { Inject } from '@nestjs/common';
import { getMessagePublisherServiceToken } from '@libs/publishers/host/utils';

const InjectMessagePublisherService = (publisherName?: string) => {
  return Inject(getMessagePublisherServiceToken(publisherName));
};

export default InjectMessagePublisherService;
