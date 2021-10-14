import React from "react";
import "../styles/terms.css";
import Term from "../assets/term.png";

function TermsOfUse() {
  return (
    <div>
      <h1 className=" main-header">Terms of Use</h1>
      <div className="terms-of-use-container">
        <div className="terms-of-use-headings">
          <p className="terms-point-heading-1">What you can expect from us</p>
          <a href="#terms_agr">Agreement to terms.</a>
          <a href="#terms_cha">Changes to terms.</a>
          <a href="#terms_int">Intellectual property rights.</a>
          <a href="#terms_pro">Prohibited activity.</a>
          <a href="#terms_use">User generated contribution.</a>
          <a href="#terms_con">Contribution license.</a>
          <a href="#terms_sub">Submissions.</a>
          <a href="#terms_lin">Links to other websites.</a>
          <a href="#terms_dis">Disclaimer.</a>
          <a href="#terms_lim">Limitation on liability.</a>
          <a href="#terms_ind">Indemnification.</a>
          <a href="#terms_user">User data.</a>
          <a href="#terms_mis">Miscellaneous.</a>
          <a href="#terms_ack">Acknowledgement.</a>
          <a href="#terms_cont">Contact us.</a>
        </div>
        <div className="terms-of-use-text">
          <p className=" main-header-upper">Effective 30 July 2021</p>
          <h1 className=" main-header-top">What you can expect from us</h1>
          <div className="terms-of-use-text-agr">
            <h2 id="terms_agr" className="terms-of-use-texts">
              Agreement to terms<span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              Welcome to Dianox (“we”, “our”, “us”). These terms and conditions
              (“Terms”, “Terms of use”) govern your use of our website
              www.dianox.com (together or individually “Site”) operated by
              Dianox.
              <br />
              <br />
              Our Privacy Policy also governs your use of our Site and explains
              how we collect, safeguard and disclose information that results
              from your use of our web pages. Your agreement with us includes
              these Terms and our Privacy Policy (“Agreements”). You acknowledge
              that you have read and understood Agreements and agree to be bound
              by them. If you do not agree with (or cannot comply with)
              Agreements, then you may not use the Site, but please let us know
              by emailing at contact@dianox.com so we can try to find a
              solution. These Terms apply to all visitors, users, and others who
              wish to access the Site. <br />
              <br /> The Site is intended only for access and use by individuals
              at least eighteen (18) years old. By accessing the Site, you
              warrant and represent that you are at least eighteen (18) years of
              age and with the full authority, right, and capacity to enter into
              this agreement and abide by all the terms and conditions of Terms.
              If you are not at least eighteen (18) years old, you must not
              access or use the Site.
            </p>
            <img src={Term} className="term-icon" alt="Term-icon"></img>
          </div>
          <div className="terms-of-use-text-cha">
            <h2 id="terms_cha" className="terms-of-use-texts">
              Changes to terms<span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              In our sole discretion, we may alter and update these Terms of use
              from time to time. All modifications become effective as soon as
              they are posted and applied to all subsequent access use of the
              Site. You accept and consent to the modifications if you continue
              to use or frequent the Site after the updated Terms of use are
              posted. You may regularly check this page to ensure that you are
              aware of any changes, as they are binding on you. We have our
              terms and conditions for some services we provide on the Site (the
              "User Agreement"). If these Terms of use and any User Agreement
              are in disagreement, the User Agreement will take precedence.
            </p>
          </div>
          <div className="terms-of-use-text-int">
            <h2 id="terms_int" className="terms-of-use-texts">
              Intellectual property rights<span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              The site and its original content, features, and functionality are
              and will remain the exclusive property of Dianox and its
              licensors. The site is protected by copyright, trademark, and
              other laws of and foreign countries. Our trademarks may not be
              used in connection with any product or service without the prior
              written consent of Dianox.
              <br />
              <br />
              These Terms of use permit you to use the Site for your personal,
              non-commercial use only, no part of the Site, and no Content or
              Marks may be copied, reproduced, aggregated, republished,
              uploaded, posted, publicly displayed, encoded, translated,
              transmitted, distributed, sold, licensed, or otherwise exploited
              for any commercial purpose whatsoever, without our express prior
              written permission.
            </p>
          </div>
          <div className="terms-of-use-text-pro">
            <h2 id="terms_pro" className="terms-of-use-texts">
              Prohibited activity<span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              You may not access or use the Site for any purpose other than that
              for which we make the Site available. The Site may not be used in
              connection with any commercial endeavors except those that are
              specifically endorsed or approved by us. As a user of the Site,
              you agree not to:
            </p>
            <ul>
              <li className="terms-list">
                Systematically retrieve data or other content from the Site to
                create or compile, directly or indirectly, a collection,
                compilation, database, or directory without written permission
                from us.
              </li>
              <li className="terms-list">
                Trick, defraud, or mislead us and other users, especially in any
                attempt to learn sensitive account information such as user
                passwords.
              </li>{" "}
              <li className="terms-list">
                Circumvent, disable, or otherwise interfere with
                security-related features of the Site, including features that
                prevent or restrict the use or copying of any Content or enforce
                limitations on the use of the Site and/or the Content contained
                therein.
              </li>{" "}
              <li className="terms-list">
                Disparage, tarnish, or otherwise harm, in our opinion, us and/or
                the Site.
              </li>{" "}
              <li className="terms-list">
                Use any information obtained from the Site in order to harass,
                abuse, or harm another person.
              </li>{" "}
              <li className="terms-list">
                Make improper use of our support services or submit false
                reports of abuse or misconduct.
              </li>{" "}
              <li className="terms-list">
                Use the Site in a manner inconsistent with any applicable laws
                or regulations.
              </li>{" "}
              <li className="terms-list">
                Use the Site in a manner inconsistent with any applicable laws
                or regulations.
              </li>{" "}
              <li className="terms-list">
                Engage in unauthorized framing of or linking to the Site.
              </li>{" "}
              <li className="terms-list">
                Upload or transmit (or attempt to upload or to transmit)
                viruses, Trojan horses, or other material, including excessive
                use of capital letters and spamming (continuous posting of
                repetitive text), that interferes with any party’s uninterrupted
                use and enjoyment of the Site or modifies, impairs, disrupts,
                alters, or interferes with the use, features, functions,
                operation, or maintenance of the Site.
              </li>
              <li className="terms-list">
                Engage in unauthorized framing of or linking to the Site.Engage
                in any automated use of the system, such as using scripts to
                send comments or messages, or using any data mining, robots, or
                similar data gathering and extraction tools.
              </li>
              <li className="terms-list">
                Delete the copyright or other proprietary rights notice from any
                Content.
              </li>
              <li className="terms-list">
                Attempt to impersonate another user or person or use the
                username of another user.
              </li>
              <li className="terms-list">
                Interfere with, disrupt, or create an undue burden on the Site
                or the networks or services connected to the Site.
              </li>
              <li className="terms-list">
                Harass, annoy, intimidate, or threaten any of our employees or
                agents engaged in providing any portion of the Site to you.
              </li>
              <li className="terms-list">
                Attempt to bypass any measures of the Site designed to prevent
                or restrict access to the Site, or any portion of the Site.
              </li>
              <li className="terms-list">
                Copy or adapt the Site’s software, including but not limited to
                Flash, PHP, HTML, JavaScript, or other code.
              </li>
              <li className="terms-list">
                Except as permitted by applicable law, decipher, decompile,
                disassemble, or reverse engineer any of the software comprising
                or in any way making up a part of the Site.
              </li>
              <li className="terms-list">
                Except as may be the result of standard search engine or
                Internet browser usage, use, launch, develop, or distribute any
                automated system, including without limitation, any spider,
                robot, cheat utility, scraper, or offline reader that accesses
                the Site, or using or launching any unauthorized script or other
                software.
              </li>
              <li className="terms-list">
                Use a buying agent or purchasing agent to make purchases on the
                Site.
              </li>
              <li className="terms-list">
                Make any unauthorized use of the Site, including collecting
                usernames and/or email addresses of users by electronic or other
                means for the purpose of sending unsolicited email, or creating
                user accounts by automated means or under false pretenses.
              </li>
              <li className="terms-list">
                Use the Site as part of any effort to compete with us or
                otherwise use the Site and/or the Content for any
                revenue-generating endeavor or commercial enterprise.
              </li>
            </ul>
          </div>
          <div className="terms-of-use-text-use">
            <h2 id="terms_use" className="terms-of-use-texts">
              User generated contribution<span className="full-stop">.</span>
            </h2>
          </div>
          <div className="terms-of-use-text-con">
            <h2 id="terms_con" className="terms-of-use-texts">
              Contribution license<span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              You and the Site agree that we may access, store, process, and use
              any information and personal data that you provide following the
              terms of the Privacy Policy and your choices (including settings).
              <br />
              <br />
              By submitting suggestions or other feedback regarding the Site,
              you agree that we can use and share such feedback for any purpose
              without compensation to you.
              <br />
              <br />
              We do not assert any ownership over your Contributions. You retain
              full ownership of all of your Contributions and any intellectual
              property rights or other proprietary rights associated with your
              Contributions. We are not liable for any statements or
              representations in your Contributions provided by you in any area
              on the Site. You are solely responsible for your Contributions to
              the Site and you expressly agree to exonerate us from any and all
              responsibility and to refrain from any legal action against us
              regarding your Contributions.
            </p>
          </div>
          <div className="terms-of-use-text-sub">
            <h2 id="terms_sub" className="terms-of-use-texts">
              Submissions<span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              You acknowledge and agree that any questions, comments,
              suggestions, ideas, feedback, or other information regarding the
              Site ("Submissions") provided by you to us are non-confidential
              and shall become our sole property. We shall own exclusive rights,
              including all intellectual property rights, and shall be entitled
              to the unrestricted use and dissemination of these Submissions for
              any lawful purpose, commercial or otherwise, without
              acknowledgment or compensation to you. You thus waive all moral
              rights to any such Submissions, and you, therefore, warrant that
              any such Submissions are original with you or that you have the
              right to submit such Submissions. You agree there shall be no
              recourse against us for any alleged or actual infringement or
              misappropriation of any proprietary right in your Submissions.
            </p>
          </div>
          <div className="terms-of-use-text-lin">
            <h2 id="terms_lin" className="terms-of-use-texts">
              Links to other websites<span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              Our Service may contain links to third-party websites or services
              that are not owned or controlled by Dianox.
              <br />
              <br />
              Dianox has no control over and assumes no responsibility for the
              content, privacy policies, or practices of any third-party
              websites or services. We do not warrant the offerings of any of
              these entities/individuals or their websites.
              <br />
              <br />
              YOU ACKNOWLEDGE AND AGREE THAT THE COMPANY SHALL NOT BE
              RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR
              LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE
              OF OR RELIANCE ON ANY SUCH CONTENT, GOODS, OR SERVICES AVAILABLE
              ON OR THROUGH ANY SUCH THIRD-PARTY WEB SITES OR SERVICES. WE
              STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY
              POLICIES OF ANY THIRD-PARTY WEBSITES OR SERVICES THAT YOU VISIT.
            </p>
          </div>
          <div className="terms-of-use-text-dis">
            <h2 id="terms_dis" className="terms-of-use-texts">
              Disclaimer<span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              THE SITE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. YOU
              AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR
              SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
              WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND
              YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              AND NON-INFRINGEMENT. <br />
              <br />
              WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR
              COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES
              LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR
              RESPONSIBILITY FOR ANY ERRORS, MISTAKES, OR INACCURACIES OF
              CONTENT AND MATERIALS, PERSONAL INJURY, OR PROPERTY DAMAGE, OF ANY
              NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
              SITE, ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS
              AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL
              INFORMATION STORED THEREIN, ANY INTERRUPTION OR CESSATION OF
              TRANSMISSION TO OR FROM THE SITE, ANY BUGS, VIRUSES, TROJAN
              HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE
              SITE BY ANY THIRD PARTY, AND/OR ANY ERRORS OR OMISSIONS IN ANY
              CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND
              INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
              TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE.
              <br />
              <br />
              WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY
              FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY
              THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR
              MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING,
              AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR
              MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY
              PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A
              PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU
              SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE
              APPROPRIATE.
            </p>
          </div>
          <div className="terms-of-use-text-lim">
            <h2 id="terms_lim" className="terms-of-use-texts">
              Limitation on liability<span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS,
              DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT,
              PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER,
              IT ARISES (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND
              EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL,
              IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED),
              WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS
              ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT,
              INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR
              PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY
              YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR
              REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGE.
            </p>
          </div>
          <div className="terms-of-use-text-ind">
            <h2 id="terms_ind" className="terms-of-use-texts">
              Indemnification<span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable
              attorneys’ fees and expenses, made by any third party due to or
              arising out of: use of the Site; breach of these Terms of use; any
              breach of your representations and warranties outlined in these
              Terms of use; your violation of the rights of a third party,
              including but not limited to intellectual property rights; or any
              other harmful act toward any other user of the Site with whom you
              connected via the Site. Notwithstanding the foregoing, we reserve
              the right, at your expense, to assume the exclusive defense and
              control of any matter for which you are required to indemnify us,
              and you agree to cooperate, at your expense, with our defense of
              such claims. We will use reasonable efforts to notify you of any
              such claim, action, or proceeding which is subject to this
              indemnification upon becoming aware of it.
            </p>
          </div>
          <div className="terms-of-use-text-user">
            <h2 id="terms_user" className="terms-of-use-texts">
              User data<span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              We will maintain certain data that you transmit to the Site for
              the purpose of managing the performance of the Site, as well as
              data relating to your use of the Site. Although we perform regular
              routine backups of data, you are solely responsible for all data
              that you transmit or that relates to any activity you have
              undertaken using the Site. You agree that we shall have no
              liability to you for any loss or corruption of any such data, and
              you hereby waive any right of action against us arising from any
              such loss or corruption of such data.
            </p>
          </div>
          <div className="terms-of-use-text-mis">
            <h2 id="terms_mis" className="terms-of-use-texts">
              Miscellaneous<span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              These Terms of use and any policies or operating rules posted by
              us on the Site or in respect to the Site constitute the entire
              agreement and understanding between you and us. Our failure to
              exercise or enforce any right or provision of these Terms of use
              shall not operate as a waiver of such right or provision. These
              Terms of use operate to the fullest extent permissible by law. We
              may assign any or all of our rights and obligations to others at
              any time. We shall not be responsible for any loss, damage, delay,
              or failure to act caused by any cause beyond our reasonable
              control. If any provision or part of a provision of these Terms of
              use is determined to be unlawful, void, or unenforceable, that
              provision or part of the provision is deemed severable from these
              Terms of use and does not affect the validity and enforceability
              of any remaining provisions. There is no joint venture,
              partnership, employment, or agency relationship created between
              you and us as a result of these Terms of use or use of the Site.
              You agree that these Terms of use will not be construed against us
              by having drafted them. You hereby waive any defenses you may have
              based on the electronic form of these Terms of use and the lack of
              signing by the parties hereto to execute these Terms of use.
            </p>
          </div>
          <div className="terms-of-use-text-ack">
            <h2 id="terms_ack" className="terms-of-use-texts">
              Acknowledgement<span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              BY USING SITE PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ
              THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
            </p>
          </div>
          <div className="terms-of-use-text-cont">
            <h2 id="terms_cont" className="terms-of-use-texts">
              Contact us<span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              Please send your feedback, comments, requests for technical
              support by email: contact@dianox.com. Thank you for visiting our
              Site.
            </p>
            <p className="terms-point-heading">
              Thank you for visiting our Site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
