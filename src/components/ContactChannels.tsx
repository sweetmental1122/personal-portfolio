import { site } from "@/content/site";
import { t } from "@/content/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

/**
 * LINE and Chatwork offered beside the form. Each card is one big link, with
 * the brand colour used only as a hairline and a hover wash — enough to be
 * recognisable at a glance without dropping two logo colours into a page
 * built on lavender.
 */
export function ContactChannels({ locale, dict }: Props) {
  if (site.channels.length === 0) return null;

  return (
    <section className="channels" aria-labelledby="contact-channels">
      <h2 className="eyebrow" id="contact-channels">
        {dict.contact.channelsTitle}
      </h2>
      <p className="channels__note">{dict.contact.channelsNote}</p>

      <div className="channels__grid">
        {site.channels.map((channel) => (
          <a
            className="channel"
            key={channel.key}
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--channel-accent": channel.accent } as React.CSSProperties}
          >
            <span className="channel__body">
              <strong>{t(channel.label, locale)}</strong>
              <span className="channel__detail">{channel.detail}</span>
            </span>

            {channel.qr ? (
              <span className="channel__qr">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={channel.qr}
                  alt=""
                  width={124}
                  height={124}
                  loading="lazy"
                  decoding="async"
                  suppressHydrationWarning
                />
              </span>
            ) : (
              <span className="channel__arrow" aria-hidden="true">
                ↗
              </span>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
