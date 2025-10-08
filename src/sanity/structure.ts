import { CiViewList } from 'react-icons/ci';
import { FaRegNewspaper, FaUser, FaWpforms } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GiAutoRepair } from 'react-icons/gi';
import { GrUserAdmin } from 'react-icons/gr';
import { IoMailUnreadOutline } from 'react-icons/io5';
import {
  MdBedroomChild,
  MdBedroomParent,
  MdCleaningServices,
  MdEvent,
  MdImage,
} from 'react-icons/md';
import { VscCallIncoming } from 'react-icons/vsc';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('The Mira by Haru Property')
    .items([
      S.divider().title('Management'),
      S.documentTypeListItem('teamMember').title('Team Members').icon(FaUser),
      S.documentTypeListItem('floorPlan')
        .title('Floor Plans')
        .icon(MdBedroomParent),
      S.documentTypeListItem('tenant').title('Tenants').icon(GrUserAdmin),
      S.documentTypeListItem('room').title('Rooms').icon(MdBedroomChild),
      S.documentTypeListItem('amenity').title('Amenities').icon(CiViewList),
      S.documentTypeListItem('gallery').title('Galleries').icon(MdImage),
      S.documentTypeListItem('neighborhood')
        .title('Neighborhoods')
        .icon(FaPeopleGroup),
      S.documentTypeListItem('maintainanceRequest')
        .title('Maintainance Requests')
        .icon(GiAutoRepair),
      S.documentTypeListItem('applicationForm')
        .title('Application Forms')
        .icon(FaWpforms),

      S.divider().title('Marketing'),
      S.documentTypeListItem('contact').title('Contacts').icon(VscCallIncoming),
      S.documentTypeListItem('service')
        .title('Available Services')
        .icon(MdCleaningServices),
      S.documentTypeListItem('blog').title('Blogs').icon(FaRegNewspaper),
      S.documentTypeListItem('newsletter')
        .title('Newsletters')
        .icon(IoMailUnreadOutline),

      S.divider().title('Events'),

      S.listItem()
        .title('Upcoming Events')
        .schemaType('event')
        .child(
          S.documentList().title('Upcoming Events').filter('date >= now()'),
        ),
      S.listItem()
        .title('Past Events')
        .schemaType('event')
        .child(S.documentList().title('Past Events').filter('date <= now()')),
      S.documentTypeListItem('event').title('All Events').icon(MdEvent),
    ]);
