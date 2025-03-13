import { SetMetadata } from '@nestjs/common';
import { UpdateTrigger } from '../../types';
import { ON_UPDATE_METADATA_KEY } from '../../constants';

const OnUpdate = (trigger: UpdateTrigger[] | UpdateTrigger) => {
  return SetMetadata(ON_UPDATE_METADATA_KEY, { trigger });
};

export default OnUpdate;
