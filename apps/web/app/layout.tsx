export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}): JSX.Element {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className="font-body text-default">{children}</body>
    </html>
  );
}
