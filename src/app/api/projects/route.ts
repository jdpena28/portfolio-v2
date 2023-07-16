import { NextRequest, NextResponse } from 'next/server';
import { PROJECTS } from '@/constant';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const project = PROJECTS.find((i) => i.slug === slug);
  if (!project) {
    return NextResponse.redirect('/404');
  }
  return NextResponse.json(project);
};
