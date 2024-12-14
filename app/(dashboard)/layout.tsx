export default async function onBoardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>Main Header</div>
      <div>{children}</div>
    </div>
  );
}
