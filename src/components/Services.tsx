import { FC } from "react";
import styles from "./../sass/_services.module.scss";

const Services: FC = () => {
  return (
    <section id="services" className={styles["services"]}>
      <div className={styles["services__section"]}>
        <h1 className={styles["services__section--head"]}>Our Services</h1>
        <div className={styles["services__section--sub"]}>
          <div className={styles["services__section--service"]}>
            <h2 className={styles["services__section--h2"]}>Transmission</h2>
            <ul className={styles["services__section--list"]}>
              <li className={styles["services__section--li"]}>
                ✓ Clutches (Service or Replacement)
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Manufacturer’s Maintenance
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Power Flushes
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Four- or Two-Wheel Drive Systems
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Automatic/Manual Systems
              </li>
            </ul>
          </div>
          <div className={styles["services__section--service"]}>
            <h2 className={styles["services__section--h2"]}>
              Electrical/Emission
            </h2>
            <ul className={styles["services__section--list"]}>
              <li className={styles["services__section--li"]}>
                ✓ Power Windows
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Engine/Transmission Computers
              </li>
              <li className={styles["services__section--li"]}>✓ Diagnostics</li>
              <li className={styles["services__section--li"]}>
                ✓ Drivability Controls
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Ignition/Emission Repairs and Services
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Interior/Exterior Ambient Lighting Decorations
              </li>
            </ul>
          </div>
          <div className={styles["services__section--service"]}>
            <h2 className={styles["services__section--h2"]}>
              SERVICE/MAINTENANCE
            </h2>
            <ul className={styles["services__section--list"]}>
              <li className={styles["services__section--li"]}>✓ A/C Service</li>
              <li className={styles["services__section--li"]}>
                ✓ Heating Maintenance
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Power Flushes
              </li>
              <li className={styles["services__section--li"]}>✓ Smog Checks</li>
              <li className={styles["services__section--li"]}>
                ✓ Registered State Emission Repair Facility
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Sales/After-sales Quality Control Checks
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Body Upgrading and Upholstry
              </li>
            </ul>
          </div>
          <div className={styles["services__section--service"]}>
            <h2 className={styles["services__section--h2"]}>ENGINE</h2>
            <ul className={styles["services__section--list"]}>
              <li className={styles["services__section--li"]}>
                ✓ Full Engine Tune-up
              </li>
              <li className={styles["services__section--li"]}>
                ✓ EFI Service & Repairs
              </li>
              <li className={styles["services__section--li"]}>✓ Oil Changes</li>
              <li className={styles["services__section--li"]}>
                ✓ Ignition Systems
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Cylinder Head
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Engine Rebuild
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Timing Belt/Chain (Service or Replacement)
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Engine Replacements
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Engine Maintenance
              </li>
              <li className={styles["services__section--li"]}>
                ✓ and Much More
              </li>
            </ul>
          </div>
          <div className={styles["services__section--service"]}>
            <h2 className={styles["services__section--h2"]}>
              SUSPENSION/STEERING
            </h2>
            <ul className={styles["services__section--list"]}>
              <li className={styles["services__section--li"]}>✓ Tire Sales</li>
              <li className={styles["services__section--li"]}>
                ✓ Wheel Alignments
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Mounting & Balancing
              </li>
              <li className={styles["services__section--li"]}>
                ✓ ABS (Anti-lock Brake System)
              </li>
              <li className={styles["services__section--li"]}>
                ✓ Brakes & Rotors (Service or Replacement)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
