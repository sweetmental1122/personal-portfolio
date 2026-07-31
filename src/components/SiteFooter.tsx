type Props = {
  siteName: string;
};

export function SiteFooter({ siteName }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} {siteName}
      </p>
    </footer>
  );
}
