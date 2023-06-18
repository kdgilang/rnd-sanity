import { client } from "@sanity/lib/client";
import InquiryModel from '@sanity/models/InquiryModel';

export function createInquiryService(inquiry: any): Promise<InquiryModel> {
  return client.create(inquiry);
}