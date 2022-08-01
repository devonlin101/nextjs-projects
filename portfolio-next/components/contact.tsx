import { Icon } from "@iconify/react";
export default function Contact() {
  return (
    <div
      className="flex flex-col flex-wrap justify-center item-center"
      id="contact"
    >
      <div className="row">
        <h1 className="p-5 m-6 text-4xl font-bold text-center">CONTACT</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center m-5 gap-5">
        <div className="flex flex-col items-center justify-center gap-6">
          <Icon icon="bx:phone-call" width="80" height="80" />
          <div className="text-2xl font-semibold">2109563666</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <Icon icon="ic:outline-attach-email" width="80" height="80" />
          <div className="text-2xl font-semibold">devonlin101@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
