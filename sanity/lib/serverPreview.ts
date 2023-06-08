import { cookies } from 'next/headers'

export function getPreviewToken(): string | undefined {
  return cookies().get('__next_preview_data')?.value
}