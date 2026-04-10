import { handleAuth } from '@auth0/nextjs-auth0';
import { NextRequest } from 'next/server';

const handler = handleAuth();

export const GET = async (req: NextRequest, props: { params: Promise<{ auth0: string }> }) => {
  const resolvedParams = await props.params;
  
  return (handler as any)(req, { params: resolvedParams });
};

export const POST = async (req: NextRequest, props: { params: Promise<{ auth0: string }> }) => {
  const resolvedParams = await props.params;
  return (handler as any)(req, { params: resolvedParams });
};