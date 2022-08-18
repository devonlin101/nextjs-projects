import { Icon } from "@iconify/react";
export default function Footer() {
  return (
    <div className="text-center">
      <div>
        &#8595; support devloper &#8595;
        <ul className="flex justify-center item-center">
          <li>
            <abbr title="paypal" className="">
              <a href="https://www.paypal.com/paypalme/kevinlin121?country.x=US&locale.x=en_US">
                <Icon icon="cib:cc-paypal" width="25" height="25" />
              </a>
            </abbr>
          </li>
          <li>
            <abbr title="buy me a coffee">
              <a href="https://www.buymeacoffee.com/devonlin101">
                <Icon icon="simple-icons:buymeacoffee" width="25" height="25" />
              </a>
            </abbr>
          </li>
          <li>
            <abbr title="patreon">
              <a href="https://www.patreon.com/devonlin101/creators">
                <Icon icon="bxl:patreon" width="25" height="25" />
              </a>
            </abbr>
          </li>
          <li>
            <abbr title="stripe">
              <a href="https://buy.stripe.com/test_8wM28YfGwaeHfLO000">
                <Icon icon="cib:cc-stripe" width="25" height="25" />
              </a>
            </abbr>
          </li>
        </ul>
      </div>
      <div>all copyright &copy; dl101 llc</div>
    </div>
  );
}
