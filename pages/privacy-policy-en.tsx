import type { NextPage } from 'next'

import styled from '@emotion/styled'
import { BackTop, Typography } from 'antd'
import Link from 'next/link'
import PageLayoutRetail from 'layouts/PageLayoutRetail'

const PrivacyPolicyENPage: NextPage = () => {
  return (
    <PageLayoutRetail title="BANGBOW-PRIVACY POLICY">
      <ContentContainer>
        <Typography.Title level={4}>BANGBOW-PRIVACY POLICY</Typography.Title>
        <Typography.Paragraph>
          Last updated August 22, 2022
        </Typography.Paragraph>
        <Typography.Paragraph>
          This privacy notice for Little Bean Soft Co.,Ltd (&ldquo;
          <b>Company</b>&ldquo;, &ldquo;<b>we</b>&ldquo;, &ldquo;<b>us</b>
          &ldquo;, or &ldquo;<b>our</b>&ldquo;), describes how and why we might
          collect, store, use, and/or share (&ldquo;<b>process</b>&ldquo;) your
          information when you use our services (&ldquo;<b>Services</b>&ldquo;),
          such as when you:
        </Typography.Paragraph>
        <ul>
          <li>
            <p>
              Download and use our mobile application (Bangbow), or any other
              application of ours that links to this privacy notice
            </p>
          </li>
          <li>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </li>
        </ul>
        <Typography.Paragraph>
          <b>Questions or concerns?</b> Reading this privacy notice will help
          you understand your privacy rights and choices. If you do not agree
          with our policies and practices, please do not use our Services. If
          you still have any questions or concerns, please contact us at
          mobile@beansx.com.
        </Typography.Paragraph>

        <Typography.Title level={5}>SUMMARY OF KEY POINTS</Typography.Title>
        <Typography.Paragraph>
          <b>
            This summary provides key points from our privacy notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our{' '}
            <b style={{ color: 'blue' }}>table of contents</b> below to find the
            section you are looking for.
          </b>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <b>What personal information do we process?</b> When you visit, use,
          or navigate our Services, we may process personal information
          depending on how you interact with Little Bean Soft Co.,Ltd and the
          Services, the choices you make, and the products and features you use.
          Learn more about personal{' '}
          <span style={{ color: 'blue' }}>information you disclose to us.</span>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <b>Do we process any sensitive personal information?</b> We may
          process sensitive personal information when necessary with your
          consent or as otherwise permitted by applicable law. Learn more about{' '}
          <span style={{ color: 'blue' }}>
            sensitive information we process.
          </span>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <b>Do we receive any information from third parties?</b> We do not
          receive any information from third parties.
        </Typography.Paragraph>
        <Typography.Paragraph>
          <b>How do we process your information?</b> We process your information
          to provide, improve, and administer our Services, communicate with
          you, for security and fraud prevention, and to comply with law. We may
          also process your information for other purposes with your consent. We
          process your information only when we have a valid legal reason to do
          so. Learn more about{' '}
          <span style={{ color: 'blue' }}>
            how we process your information.
          </span>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <b>
            In what situations and with which types of parties do we share
            personal information?
          </b>{' '}
          We may share information in specific situations and with specific
          categories of third parties. Learn more about{' '}
          <span style={{ color: 'blue' }}>
            when and with whom we share your personal information.
          </span>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <b>How do we keep your information safe?</b> We have organizational
          and technical processes and procedures in place to protect your
          personal information. However, no electronic transmission over the
          internet or information storage technology can be guaranteed to be
          100% secure, so we cannot promise or guarantee that hackers,
          cybercriminals, or other unauthorized third parties will not be able
          to defeat our security and improperly collect, access, steal, or
          modify your information. Learn more about{' '}
          <span style={{ color: 'blue' }}>
            how we keep your information safe.
          </span>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <b>What are your rights?</b> Depending on where you are located
          geographically, the applicable privacy law may mean you have certain
          rights regarding your personal information. Learn more about{' '}
          <span style={{ color: 'blue' }}>your privacy rights.</span>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <b>How do you exercise your rights?</b> The easiest way to exercise
          your rights is by submitting a{' '}
          <span style={{ color: 'blue' }}>data subject access request,</span> or
          by contacting us. We will consider and act upon any request in
          accordance with applicable data protection laws.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Want to learn more about what Little Bean Soft Co.,Ltd does with any
          information we collect?{' '}
          <span style={{ color: 'blue' }}>
            Review the privacy notice in full.
          </span>
        </Typography.Paragraph>

        <Typography.Title level={5}>TABLE OF CONTENTS</Typography.Title>
        <Typography.Paragraph
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => {
            window.location.hash = '#content-1'
          }}
        >
          <b>1. WHAT INFORMATION DO WE COLLECT?</b>
        </Typography.Paragraph>
        <Typography.Paragraph
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => {
            window.location.hash = '#content-2'
          }}
        >
          <b>2. HOW DO WE PROCESS YOUR INFORMATION?</b>
        </Typography.Paragraph>
        <Typography.Paragraph
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => {
            window.location.hash = '#content-3'
          }}
        >
          <b>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</b>
        </Typography.Paragraph>
        <Typography.Paragraph
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => {
            window.location.hash = '#content-4'
          }}
        >
          <b>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</b>
        </Typography.Paragraph>
        <Typography.Paragraph
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => {
            window.location.hash = '#content-5'
          }}
        >
          <b>5. HOW LONG DO WE KEEP YOUR INFORMATION?</b>
        </Typography.Paragraph>
        <Typography.Paragraph
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => {
            window.location.hash = '#content-6'
          }}
        >
          <b>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</b>
        </Typography.Paragraph>
        <Typography.Paragraph
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => {
            window.location.hash = '#content-7'
          }}
        >
          <b>7. DO WE COLLECT INFORMATION FROM MINORS?</b>
        </Typography.Paragraph>
        <Typography.Paragraph
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => {
            window.location.hash = '#content-8'
          }}
        >
          <b>8. WHAT ARE YOUR PRIVACY RIGHTS?</b>
        </Typography.Paragraph>
        <Typography.Paragraph
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => {
            window.location.hash = '#content-9'
          }}
        >
          <b>9. CONTROLS FOR DO-NOT-TRACK FEATURES</b>
        </Typography.Paragraph>
        <Typography.Paragraph
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => {
            window.location.hash = '#content-10'
          }}
        >
          <b>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</b>
        </Typography.Paragraph>
        <Typography.Paragraph
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => {
            window.location.hash = '#content-11'
          }}
        >
          <b>11. DO WE MAKE UPDATES TO THIS NOTICE?</b>
        </Typography.Paragraph>
        <Typography.Paragraph
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => {
            window.location.hash = '#content-12'
          }}
        >
          <b>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</b>
        </Typography.Paragraph>
        <Typography.Paragraph
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => {
            window.location.hash = '#content-13'
          }}
        >
          <b>
            {' '}
            13. HOW CAN YOU REVIEW, UPDATE, OR TERMINATE THE DATA WE COLLECT
            FROM YOU?
          </b>
        </Typography.Paragraph>
        <div id="content-1"></div>
        <Typography.Title level={5}>
          1. WHAT INFORMATION DO WE COLLECT?
        </Typography.Title>
        <Typography.Paragraph>
          <b>Personal information you disclose to us</b>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <b>In Short:</b>We collect personal information that you provide to
          us.
        </Typography.Paragraph>
        <Typography.Paragraph>
          We collect personal information that you voluntarily provide to us
          when you register on the Services, express an interest in obtaining
          information about us or our products and Services, when you
          participate in activities on the Services, or otherwise when you
          contact us.
        </Typography.Paragraph>
        <Typography.Paragraph>
          <b>Personal Information Provided by You.</b> The personal information
          that we collect depends on the context of your interactions with us
          and the Services, the choices you make, and the products and features
          you use. The personal information we collect may include the
          following:
        </Typography.Paragraph>
        <ul>
          <li>names</li>
          <li>phone numbers</li>
          <li>email addresses</li>
          <li>contact preferences</li>
          <li>contact or authentication data billing addresses</li>
        </ul>
        <Typography.Paragraph>
          <b>Sensitive Information.</b> When necessary, with your consent or as
          otherwise permitted by applicable law, we process the following
          categories of sensitive information:
        </Typography.Paragraph>
        <Typography.Paragraph>
          <b>Payment Data.</b> We may collect data necessary to process your
          payment if you make purchases, such as your payment instrument number,
          and the security code associated with your payment instrument. All
          payment data is stored by ksherthailand. You may find their privacy
          notice link(s) here:{' '}
          <span>
            <Link href="https://www.ksherthailand.com/privacy-policy?lang=en">
              https://www.ksherthailand.com/privacy-policy?lang=en
            </Link>
          </span>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <b>Application Data.</b> If you use our application(s), we also may
          collect the following information if you choose to provide us with
          access or permission:
        </Typography.Paragraph>

        <ul>
          <li>
            Geolocation Information. We may request access or permission to
            track location-based information from your mobile device, either
            continuously or while you are using our mobile application(s), to
            provide certain location-based services. If you wish to change our
            access or permissions you may do so in your device&apos;s settings.
          </li>
          <li>
            Mobile Device Access. We may request access or permission to certain
            features from your mobile device, including your mobile
            device&apos;s sms messages, camera, storage, and other features. If
            you wish to change our access or permissions, you may do so in your
            device&apos;s settings.
          </li>
          <li>
            Mobile Device Data. We automatically collect device information
            (such as your mobile device ID, model, and manufacturer), operating
            system, version information and system configuration information,
            device and application identification numbers, browser type and
            version, hardware model Internet service provider and/or mobile
            carrier, and Internet Protocol (IP) address (or proxy server). If
            you are using our application(s), we may also collect information
            about the phone network associated with your mobile device, your
            mobile device&apos;s operating system or platform, the type of
            mobile device you use, your mobile device&apos;s unique device ID,
            and information about the features of our application(s) you
            accessed.
          </li>
          <li>
            Push Notifications. We may request to send you push notifications
            regarding your account or certain features of the application(s). If
            you wish to opt out from receiving these types of communications,
            you may turn them off in your device&apos;s settings.
          </li>
        </ul>
        <Typography.Paragraph>
          This information is primarily needed to maintain the security and
          operation of our application(s), for troubleshooting, and for our
          internal analytics and reporting purposes.
        </Typography.Paragraph>
        <Typography.Paragraph>
          All personal information that you provide to us must be true,
          complete, and accurate, and you must notify us of any changes to such
          personal information.
        </Typography.Paragraph>

        <div id="content-2">
          <Typography.Title level={5}>
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </Typography.Title>
          <Typography.Paragraph>
            <b>In Short:</b> We process your information to provide, improve,
            and administer our Services, communicate with you, for security and
            fraud prevention, and to comply with law. We may also process your
            information for other purposes with your consent.
          </Typography.Paragraph>
          <Typography.Paragraph>
            <b>
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </b>
          </Typography.Paragraph>
          <ul>
            <li>
              <b>
                To facilitate account creation and authentication and otherwise
                manage user accounts.
              </b>{' '}
              We may process your information so you can create and log in to
              your account, as well as keep your account in working order.
            </li>
            <li>
              <b>To deliver and facilitate delivery of services to the user.</b>
              We may process your information to provide you with the requested
              service.
            </li>
          </ul>
        </div>
        <div id="content-3"></div>
        <Typography.Title level={5}>
          3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        </Typography.Title>
        <Typography.Paragraph>
          <b>In Short:</b>We may share information in specific situations
          described in this section and/or with the following categories of
          third parties.
        </Typography.Paragraph>
        <Typography.Paragraph>
          <b>Vendors, Consultants, and Other Third-Party Service Providers.</b>
          We may share your data with third-party vendors, service providers,
          contractors, or agents <b>(&ldquo;third parties&ldquo;)</b> who
          perform services for us or on our behalf and require access to such
          information to do that work. The categories of third parties we may
          share personal information with are as follows:
        </Typography.Paragraph>
        <ul>
          <li>Cloud Computing Services</li>
          <li>Payment Processors</li>
          <li>Sales & Marketing Tools</li>
        </ul>
        <Typography.Paragraph>
          We also may need to share your personal information in the following
          situations:
        </Typography.Paragraph>

        <ul>
          <li>
            <b>Business Transfers.</b>We may share or transfer your information
            in connection with, or during negotiations of, any merger, sale of
            company assets, financing, or acquisition of all or a portion of our
            business to another company.
          </li>
          <li>
            <b>When we use Google Maps Platform APIs.</b>We may share your
            information with certain Google Maps Platform APIs (e.g., Google
            Maps API, Places API). We use certain Google Maps Platform APIs to
            retrieve certain information when you make location-specific
            requests. This includes: Used for delivering products and view store
            location.; and other similar information. A full list of what we use
            information for can be found in this section and in the previous
            section titled &ldquo;
            <span style={{ color: 'blue' }}>
              HOW DO WE PROCESS YOUR INFORMATION?
            </span>
            &ldquo;. We obtain and store on your device (&ldquo;cache&ldquo;)
            your location. You may revoke your consent anytime by contacting us
            at the contact details provided at the end of this document. The
            Google Maps Platform APIs that we use store and access cookies and
            other information on your devices. If you are a user currently in
            the European Economic Area (EU countries, Iceland, Liechtenstein,
            and Norway) or the United Kingdom, please take a look at our Cookie
            Notice.
          </li>
          <li>
            <b>Offer Wall.</b>Our application(s) may display a third-party
            hosted &ldquo;offer wall.&ldquo; Such an offer wall allows
            third-party advertisers to offer virtual currency, gifts, or other
            items to users in return for the acceptance and completion of an
            advertisement offer. Such an offer wall may appear in our
            application(s) and be displayed to you based on certain data, such
            as your geographic area or demographic information. When you click
            on an offer wall, you will be brought to an external website
            belonging to other persons and will leave our application(s). A
            unique identifier, such as your user ID, will be shared with the
            offer wall provider in order to prevent fraud and properly credit
            your account with the relevant reward.
          </li>
        </ul>

        <div id="content-4"></div>
        <Typography.Title level={5}>
          4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        </Typography.Title>
        <Typography.Paragraph>
          <b>In Short:</b> We may use cookies and other tracking technologies to
          collect and store your information.
        </Typography.Paragraph>
        <Typography.Paragraph>
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to access or store information. Specific information about
          how we use such technologies and how you can refuse certain cookies is
          set out in our Cookie Notice.
        </Typography.Paragraph>

        <div id="content-5"></div>
        <Typography.Title level={5}>
          5. HOW LONG DO WE KEEP YOUR INFORMATION?
        </Typography.Title>
        <Typography.Paragraph>
          <b>In Short:</b> We keep your information for as long as necessary to
          fulfill the purposes outlined in this privacy notice unless otherwise
          required by law.
        </Typography.Paragraph>
        <Typography.Paragraph>
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting, or other legal requirements). No purpose in this notice
          will require us keeping your personal information for longer than the
          period of time in which users have an account with us.
        </Typography.Paragraph>
        <Typography.Paragraph>
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </Typography.Paragraph>

        <div id="content-6"></div>
        <Typography.Title level={5}>
          6. HOW DO WE KEEP YOUR INFORMATION SAFE?
        </Typography.Title>
        <Typography.Paragraph>
          <b>In Short:</b> We aim to protect your personal information through a
          system of organizational and technical security measures.
        </Typography.Paragraph>
        <Typography.Paragraph>
          We have implemented appropriate and reasonable technical and
          organizational security measures designed to protect the security of
          any personal information we process. However, despite our safeguards
          and efforts to secure your information, no electronic transmission
          over the Internet or information storage technology can be guaranteed
          to be 100% secure, so we cannot promise or guarantee that hackers,
          cybercriminals, or other unauthorized third parties will not be able
          to defeat our security and improperly collect, access, steal, or
          modify your information. Although we will do our best to protect your
          personal information, transmission of personal information to and from
          our Services is at your own risk. You should only access the Services
          within a secure environment.
        </Typography.Paragraph>
        <div id="content-7"></div>
        <Typography.Title level={5}>
          7. DO WE COLLECT INFORMATION FROM MINORS?
        </Typography.Title>
        <Typography.Paragraph>
          <b>In Short:</b> We do not knowingly collect data from or market to
          minors. Thai Language
        </Typography.Paragraph>
        <div id="content-8"></div>
        <Typography.Title level={5}>
          8. WHAT ARE YOUR PRIVACY RIGHTS?
        </Typography.Title>
        <Typography.Paragraph>
          <b>In Short:</b> You may review, change, or terminate your account at
          any time.
        </Typography.Paragraph>
        <Typography.Paragraph>
          If you are located in the EEA or UK and you believe we are unlawfully
          processing your personal information, you also have the right to
          complain to your{' '}
          <span style={{ color: 'blue' }}>
            {' '}
            Member State data protection authority
          </span>{' '}
          or{' '}
          <span style={{ color: 'blue' }}> UK data protection authority.</span>
        </Typography.Paragraph>
        <Typography.Paragraph>
          If you are located in Switzerland, you may contact the{' '}
          <span style={{ color: 'blue' }}>
            Federal Data Protection and Information Commissioner.
          </span>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <b>Withdrawing your consent:</b> If we are relying on your consent to
          process your personal information, which may be express and/or implied
          consent depending on the applicable law, you have the right to
          withdraw your consent at any time. You can withdraw your consent at
          any time by contacting us by using the contact details provided in the
          section &ldquo;
          <span style={{ color: 'blue' }}>
            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </span>
          &ldquo; below.
        </Typography.Paragraph>
        <Typography.Paragraph>
          However, please note that this will not affect the lawfulness of the
          processing before its withdrawal nor, when applicable law allows, will
          it affect the processing of your personal information conducted in
          reliance on lawful processing grounds other than consent.
        </Typography.Paragraph>

        <Typography.Paragraph>
          <b>Account Information</b>
        </Typography.Paragraph>

        <Typography.Paragraph>
          If you would at any time like to review or change the information in
          your account or terminate your account, you can:
        </Typography.Paragraph>

        <ul>
          <li>Log in to your account settings and update your user account.</li>
          <li>Contact us using the contact information provided.</li>
        </ul>
        <Typography.Paragraph>
          Upon your request to terminate your account, we will deactivate or
          delete your account and information from our active databases.
          However, we may retain some information in our files to prevent fraud,
          troubleshoot problems, assist with any investigations, enforce our
          legal terms and/or comply with applicable legal requirements.
        </Typography.Paragraph>
        <Typography.Paragraph>
          If you have questions or comments about your privacy rights, you may
          email us at mobile@beansx.com.
        </Typography.Paragraph>

        <div id="content-9"></div>
        <Typography.Title level={5}>
          9. CONTROLS FOR DO-NOT-TRACK FEATURES
        </Typography.Title>
        <Typography.Paragraph>
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track (&ldquo;DNT&ldquo;) feature or
          setting you can activate to signal your privacy preference not to have
          data about your online browsing activities monitored and collected. At
          this stage no uniform technology standard for recognizing and
          implementing DNT signals has been finalized. As such, we do not
          currently respond to DNT browser signals or any other mechanism that
          automatically communicates your choice not to be tracked online. If a
          standard for online tracking is adopted that we must follow in the
          future, we will inform you about that practice in a revised version of
          this privacy notice.{' '}
        </Typography.Paragraph>

        <div id="content-10"></div>
        <Typography.Title level={5}>
          10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
        </Typography.Title>
        <Typography.Paragraph>
          <b>In Short:</b> Yes, if you are a resident of California, you are
          granted specific rights regarding access to your personal information.
        </Typography.Paragraph>
        <Typography.Paragraph>
          California Civil Code Section 1798.83, also known as the &ldquo;Shine
          The Light&ldquo; law, permits our users who are California residents
          to request and obtain from us, once a year and free of charge,
          information about categories of personal information (if any) we
          disclosed to third parties for direct marketing purposes and the names
          and addresses of all third parties with which we shared personal
          information in the immediately preceding calendar year. If you are a
          California resident and would like to make such a request, please
          submit your request in writing to us using the contact information
          provided below.
        </Typography.Paragraph>
        <Typography.Paragraph>
          If you are under 18 years of age, reside in California, and have a
          registered account with Services, you have the right to request
          removal of unwanted data that you publicly post on the Services. To
          request removal of such data, please contact us using the contact
          information provided below and include the email address associated
          with your account and a statement that you reside in California. We
          will make sure the data is not publicly displayed on the Services, but
          please be aware that the data may not be completely or comprehensively
          removed from all our systems (e.g., backups, etc.).
        </Typography.Paragraph>
        <div id="content-11"></div>
        <Typography.Title level={5}>
          11. DO WE MAKE UPDATES TO THIS NOTICE?
        </Typography.Title>
        <Typography.Paragraph>
          <b>In Short:</b> Yes, we will update this notice as necessary to stay
          compliant with relevant laws.
        </Typography.Paragraph>
        <Typography.Paragraph>
          We may update this privacy notice from time to time. The updated
          version will be indicated by an updated &ldquo;Revised&ldquo; date and
          the updated version will be effective as soon as it is accessible. If
          we make material changes to this privacy notice, we may notify you
          either by prominently posting a notice of such changes or by directly
          sending you a notification. We encourage you to review this privacy
          notice frequently to be informed of how we are protecting your
          information.{' '}
        </Typography.Paragraph>
        <div id="content-12"></div>
        <Typography.Title level={5}>
          12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
        </Typography.Title>
        <Typography.Paragraph>
          If you have questions or comments about this notice, you may email us
          at mobile@beansx.com or by post to:
        </Typography.Paragraph>
        <Typography.Paragraph>
          Little Bean Soft Co.,Ltd No. 2 Marigold Tower Suvarnabhumi, 2nd Floor,
          Room No. 1207, Soi Lat Krabang 1, On Nut-Lat Krabang Road Latkrabang,
          Bangkok 10520 Thailand
        </Typography.Paragraph>
        <div id="content-13"></div>
        <Typography.Title level={5}>
          13. HOW CAN YOU REVIEW, UPDATE, OR TERMINATE THE DATA WE COLLECT FROM
          YOU?
        </Typography.Title>
        <Typography.Paragraph>
          Based on the applicable laws of your country, you may have the right
          to request access to the personal information we collect from you,
          change that information, or delete it. To request to review, update,
          or terminate your personal information, please fill out and submit a{' '}
          <span style={{ color: 'blue' }}>data subject access request.</span>
        </Typography.Paragraph>
        <div>
          <BackTop />
        </div>
      </ContentContainer>
    </PageLayoutRetail>
  )
}

export default PrivacyPolicyENPage

export const ContentContainer = styled.div`
  --gap: 60px;

  margin-top: 10px;
  padding: 0 var(--gap);
  min-height: calc(100vh - 364px);

  @media (max-width: 1420px) {
    --gap: 24px;
  }
`

export const AnchorLink = styled.a`
  color: #000;
  text-decoration: underline;
  cursor: pointer;
`
