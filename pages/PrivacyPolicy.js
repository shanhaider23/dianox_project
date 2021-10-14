import React from "react";
import "../styles/terms.css";
import Term from "../assets/lock.png";

function Privacy() {
  return (
    <div>
      <h1 className=" main-header">Privacy policy</h1>
      <div className="terms-of-use-container">
        <div className="terms-of-use-headings">
          <p className="terms-point-heading-1">Your privacy matters</p>
          <a href="#terms_agr">We value the trust you place in us.</a>
          <a href="#terms_cha">A safe way to explore your health.</a>
          <a href="#terms_int">You are free to opt-out.</a>
          <a href="#terms_pro">You own your data.</a>

          <a href="#terms_con">Information we collect.</a>
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
          <h1 className=" main-header-top">Your privacy matters</h1>
          <div className="terms-of-use-text-agr">
            <h2 id="terms_agr" className="terms-of-use-texts">
              We value the trust you place in us
              <span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              You entrust Dianox with sensitive information as we investigate
              your health. Your data is safe with us as our first priority is to
              protect your privacy and we never compromise with security.
            </p>
            <img src={Term} className="term-icon-lock" alt="Term-icon"></img>
          </div>
          <div className="terms-of-use-text-cha">
            <h2 id="terms_cha" className="terms-of-use-texts">
              A safe way to explore your health
              <span className="full-stop">.</span>
            </h2>
            <ul>
              <li className="terms-lists">
                You are in complete control of what happens with your data.
              </li>
              <li className="terms-lists">
                We never share your data with third parties without your
                explicit consent.
              </li>
              <li className="terms-lists">
                Your health insights are provided in a user friendly way to keep
                you informed.
              </li>
              <li className="terms-lists">
                After testing your saliva, we safely discard the sample.
              </li>
            </ul>
          </div>
          <div className="terms-of-use-text-int">
            <h2 id="terms_int" className="terms-of-use-texts">
              You are free to opt-out<span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              You have the option to download your data and delete your account
              in your account settings at any time.
            </p>
          </div>
          <div className="terms-of-use-text-pro">
            <h2 id="terms_pro" className="terms-of-use-texts">
              You own your data<span className="full-stop">.</span>
            </h2>
            <p className="terms-point-heading">
              Your data. Your rules. As soon as you order your test and set up
              your account, you decide what happens with your data - how much
              you want to explore and if you want to share with anyone. Thank
              you for choosing to be part of our community at Dianox ("we",
              "us", "our"). We are committed to protecting your personal
              information and your right to privacy. If you have any questions
              or concerns about this privacy notice, or our practices with
              regards to your personal information, please contact us at
              contact@dianox.com.
              <br />
              <br />
              When you use our website, we appreciate that you are trusting us
              with your personal information. We take your privacy very
              seriously. In this privacy notice, we seek to explain to you in
              the clearest way possible what information we collect, how we use
              it and what rights you have in relation to it. We hope you take
              some time to read through it carefully, as it is important. If
              there are any terms in this privacy notice that you do not agree
              with, please discontinue use of our Services immediately.
              <br />
              <br />
              This Site is only available to users who are at least 18 years
              old. You represent and warrant that you are at least 18 years old
              and of legal age to enter into a binding contract with us by using
              the Site. You must not access or use our Site if you do not meet
              all of these requirements.
              <br />
              <br />
              Please read this privacy notice carefully as it will help you
              understand what we do with the information that we collect.
            </p>
          </div>
          <div className="terms-of-use-text-use">
            <h2 id="terms_use" className="terms-of-use-texts">
              Information we collect<span className="full-stop">.</span>
            </h2>
          </div>
          <div className="terms-of-use-text-con">
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

export default Privacy;
