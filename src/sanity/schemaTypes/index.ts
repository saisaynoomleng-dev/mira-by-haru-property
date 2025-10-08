import { type SchemaTypeDefinition } from 'sanity';
import { teamMemberType } from './teamMemberType';
import { blockContentType } from './blockContentType';
import { floorPlanType } from './floorPlanType';
import { contactType } from './contactType';
import { amenityType } from './amenityType';
import { galleryType } from './galleryType';
import { imageType } from './imageType';
import { neighborhoodType } from './neighborhoodType';
import { serviceType } from './serviceType';
import { blogType } from './blogType';
import { newsletterType } from './newsletterType';
import { eventType } from './eventType';
import { maintainanceType } from './maintainenceType';
import { applicationFormType } from './applicationFormType';
import { tenantType } from './tenantType';
import { roomType } from './roomType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    teamMemberType,
    blockContentType,
    floorPlanType,
    contactType,
    amenityType,
    galleryType,
    imageType,
    neighborhoodType,
    serviceType,
    blogType,
    newsletterType,
    eventType,
    maintainanceType,
    applicationFormType,
    tenantType,
    roomType,
  ],
};
