import { useState } from "react";
import { PageHead, useFadeUp } from "../components/Shared";

const Field = ({ label, en, required, children }) => (
  <div>
    <div className="flex items-baseline gap-3 mb-2">
      <p className="en text-[10px] tracking-widest2 text-accent">{en}</p>
      <p className="text-[13px] text-ink font-semibold">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </p>
    </div>
    {children}
  </div>
);

export default function Contact() {
  useFadeUp();
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHead
        num="05"
        en="CONTACT"
        jp="お問い合わせ"
        lead="お仕事のご相談、採用に関するご質問など、お気軽にご連絡ください。"
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <aside className="fade-up text-[14px] text-gray-700 leading-[2.1]">
            <p className="en text-[11px] tracking-widest2 text-accent mb-3">ABOUT FORM</p>
            <p>
              下記フォームよりお問い合わせください。
              <br />
              <strong className="text-ink">2営業日以内</strong>にご返信いたします。
            </p>
            <div className="mt-8 border-t border-line pt-6 space-y-3">
              <p className="en text-[11px] tracking-widest2 text-gray-500">OR CONTACT VIA</p>
              <p className="text-ink font-medium">info@tomori-tech.com</p>
              <p className="text-gray-500 text-xs">営業時間 平日 9:30 - 18:30</p>
            </div>
          </aside>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="fade-up bg-white border border-line p-8 lg:p-10 space-y-6"
          >
            {sent ? (
              <div className="text-center py-16">
                <p className="en text-accent tracking-widest2 text-sm">THANK YOU</p>
                <h3 className="mt-3 text-2xl font-bold text-ink">送信が完了しました</h3>
                <p className="mt-3 text-[14px] text-gray-600">
                  ご連絡ありがとうございます。担当よりご返信いたします。
                </p>
              </div>
            ) : (
              <>
                <Field label="お問い合わせ種別" en="CATEGORY" required>
                  <select className="w-full border border-line px-4 py-3 text-[14px] focus:outline-none focus:border-accent">
                    <option>サービスに関するお問い合わせ</option>
                    <option>採用に関するお問い合わせ</option>
                    <option>取材・協業に関するお問い合わせ</option>
                    <option>その他</option>
                  </select>
                </Field>
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="会社名" en="COMPANY" required>
                    <input type="text" className="w-full border border-line px-4 py-3 text-[14px] focus:outline-none focus:border-accent" />
                  </Field>
                  <Field label="お名前" en="NAME" required>
                    <input type="text" className="w-full border border-line px-4 py-3 text-[14px] focus:outline-none focus:border-accent" />
                  </Field>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="メールアドレス" en="EMAIL" required>
                    <input type="email" className="w-full border border-line px-4 py-3 text-[14px] focus:outline-none focus:border-accent" />
                  </Field>
                  <Field label="電話番号" en="TEL">
                    <input type="tel" className="w-full border border-line px-4 py-3 text-[14px] focus:outline-none focus:border-accent" />
                  </Field>
                </div>
                <Field label="お問い合わせ内容" en="MESSAGE" required>
                  <textarea rows={6} className="w-full border border-line px-4 py-3 text-[14px] focus:outline-none focus:border-accent" />
                </Field>
                <label className="flex items-start gap-3 text-[13px] text-gray-600">
                  <input type="checkbox" className="mt-1" required />
                  <span>プライバシーポリシーに同意の上、送信します。</span>
                </label>
                <button type="submit" className="btn-primary w-full justify-center">
                  <span>送信する</span>
                  <span>→</span>
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
