import type { NextPage } from 'next'

import PageLayout from 'layouts/PageLayout'
import styled from '@emotion/styled'
import { Typography } from 'antd'

const PrivacyPolicyTHPage: NextPage = () => {
  return (
    <PageLayout title="การคุ้มครองข้อมูลส่วนบุคคล">
      <ContentContainer>
        <Typography.Title level={4}>นโยบายความเป็นส่วนตัว</Typography.Title>
        <Typography.Title level={5}>
          บริษัท ลิตเติ้ล บีน ซอฟท์ จำกัด
        </Typography.Title>
        <Typography.Title level={5}>
          นโยบายความเป็นส่วนตัวสำหรับลูกค้า
        </Typography.Title>
        <Typography.Paragraph>
          บริษัท ลิตเติ้ล บีน ซอฟท์ จำกัด
          ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ
          โดยนโยบายความเป็นส่วนตัวฉบับนี้ได้อธิบายแนวปฏิบัติเกี่ยวกับการเก็บรวบรวม
          ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล รวมถึงสิทธิต่าง ๆ
          ของเจ้าของข้อมูลส่วนบุคคล ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
        </Typography.Paragraph>

        <Typography.Title level={5}>
          การเก็บรวบรวมข้อมูลส่วนบุคคล
        </Typography.Title>
        <Typography.Paragraph>
          เราจะเก็บรวบรวมข้อมูลส่วนบุคคลที่ได้รับโดยตรงจากคุณผ่านช่องทาง
          ดังต่อไปนี้
        </Typography.Paragraph>
        <Typography.Paragraph>1. การสมัครสมาชิก</Typography.Paragraph>
        <Typography.Paragraph>2. โทรศัพท์</Typography.Paragraph>
        <Typography.Paragraph>3. อีเมล</Typography.Paragraph>

        <Typography.Title level={5}>
          ประเภทข้อมูลส่วนบุคคลที่เก็บรวบรวม
        </Typography.Title>
        <Typography.Paragraph>
          ข้อมูลส่วนบุคคล เช่น ชื่อ นามสกุล อายุ วันเดือนปีเกิด สัญชาติ
          เลขประจำตัวประชาชน หนังสือเดินทาง เป็นต้น
        </Typography.Paragraph>
        <Typography.Paragraph>
          ข้อมูลการติดต่อ เช่น ที่อยู่ หมายเลขโทรศัพท์ อีเมล เป็นต้น
        </Typography.Paragraph>
        <Typography.Paragraph>
          ข้อมูลบัญชี เช่น บัญชีผู้ใช้งาน ประวัติการใช้งาน เป็นต้น
        </Typography.Paragraph>
        <Typography.Paragraph>
          หลักฐานแสดงตัวตน เช่น สำเนาบัตรประจำตัวประชาชน สำเนาหนังสือเดินทาง
          เป็นต้น
        </Typography.Paragraph>
        <Typography.Paragraph>
          ข้อมูลการทำธุรกรรมและการเงิน เช่น ประวัติการสั่งซื้อ
          รายละเอียดบัตรเครดิต บัญชีธนาคาร เป็นต้น
        </Typography.Paragraph>
        <Typography.Paragraph>
          ข้อมูลทางเทคนิค เช่น IP address, Cookie ID, ประวัติการใช้งานเว็บไซต์
          (Activity Log) เป็นต้น
        </Typography.Paragraph>
        <Typography.Paragraph>
          ข้อมูลอื่น ๆ เช่น รูปภาพ ภาพเคลื่อนไหว
          และข้อมูลอื่นใดที่ถือว่าเป็นข้อมูลส่วนบุคคลตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
        </Typography.Paragraph>

        <Typography.Title level={5}>ผู้เยาว์</Typography.Title>
        <Typography.Paragraph>
          หากคุณมีอายุต่ำกว่า 20 ปีหรือมีข้อจำกัดความสามารถตามกฎหมาย
          เราอาจเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ
          เราอาจจำเป็นต้องให้พ่อแม่หรือผู้ปกครองของคุณให้ความยินยอมหรือที่กฎหมายอนุญาตให้ทำได้
          หากเราทราบว่ามีการเก็บรวบรวมข้อมูลส่วนบุคคลจากผู้เยาว์โดยไม่ได้รับความยินยอมจากพ่อแม่หรือผู้ปกครอง
          เราจะดำเนินการลบข้อมูลนั้นออกจากเซิร์ฟเวอร์ของเรา
        </Typography.Paragraph>

        <Typography.Title level={5}>
          วิธีการเก็บรักษาข้อมูลส่วนบุคคล
        </Typography.Title>
        <Typography.Paragraph>
          เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณในรูปแบบเอกสารและรูปแบบอิเล็กทรอนิกส์
        </Typography.Paragraph>
        <Typography.Paragraph>
          เราเก็บรักษาข้อมูลส่วนบุคคลของคุณ ดังต่อไปนี้
        </Typography.Paragraph>
        <Typography.Paragraph>
          1. เซิร์ฟเวอร์บริษัทของเราในประเทศไทย
        </Typography.Paragraph>
        <Typography.Paragraph>
          2. ผู้ให้บริการเซิร์ฟเวอร์ในประเทศไทย
        </Typography.Paragraph>
        <Typography.Paragraph>
          3. ผู้ให้บริการเซิร์ฟเวอร์ในต่างประเทศ
        </Typography.Paragraph>

        <Typography.Title level={5}>
          การประมวลผลข้อมูลส่วนบุคคล
        </Typography.Title>
        <Typography.Paragraph>
          เราจะเก็บรวบรวม ใช้
          หรือเปิดเผยข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้
        </Typography.Paragraph>
        <Typography.Paragraph>
          1. เพื่อสร้างและจัดการบัญชีผู้ใช้งาน
        </Typography.Paragraph>
        <Typography.Paragraph>
          2. เพื่อจัดส่งสินค้าหรือบริการ
        </Typography.Paragraph>
        <Typography.Paragraph>
          3. เพื่อปรับปรุงสินค้า บริการ หรือประสบการณ์การใช้งาน
        </Typography.Paragraph>
        <Typography.Paragraph>
          4. เพื่อการบริหารจัดการภายในบริษัท
        </Typography.Paragraph>
        <Typography.Paragraph>
          5. เพื่อการตลาดและการส่งเสริมการขาย
        </Typography.Paragraph>
        <Typography.Paragraph>6. เพื่อการบริการหลังการขาย</Typography.Paragraph>
        <Typography.Paragraph>7. เพื่อรวบรวมข้อเสนอแนะ</Typography.Paragraph>
        <Typography.Paragraph>
          8. เพื่อชำระค่าสินค้าหรือบริการ
        </Typography.Paragraph>
        <Typography.Paragraph>
          9. เพื่อปฏิบัติตามข้อตกลงและเงื่อนไข (Terms and Conditions)
        </Typography.Paragraph>
        <Typography.Paragraph>
          10. เพื่อปฏิบัติตามกฎหมายและกฎระเบียบของหน่วยงานราชการ
        </Typography.Paragraph>

        <Typography.Title level={5}>การเปิดเผยข้อมูลส่วนบุคคล</Typography.Title>
        <Typography.Paragraph>
          เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณให้แก่ผู้อื่นภายใต้ความยินยอมของคุณหรือที่กฎหมายอนุญาตให้เปิดเผยได้
          ดังต่อไปนี้
        </Typography.Paragraph>
        <Typography.Paragraph>การบริหารจัดการภายในองค์กร</Typography.Paragraph>
        <Typography.Paragraph>
          เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณภายในบริษัทเท่าที่จำเป็นเพื่อปรับปรุงและพัฒนาสินค้าหรือบริการของเรา
          เราอาจรวบรวมข้อมูลภายในสำหรับสินค้าหรือบริการต่าง ๆ
          ภายใต้นโยบายนี้เพื่อประโยชน์ของคุณและผู้อื่นมากขึ้น
        </Typography.Paragraph>

        <Typography.Title level={5}>
          ระยะเวลาจัดเก็บข้อมูลส่วนบุคคล
        </Typography.Title>
        <Typography.Paragraph>
          เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณไว้ตามระยะเวลาที่จำเป็นในระหว่างที่คุณเป็นลูกค้าหรือมีความสัมพันธ์อยู่กับเราหรือตลอดระยะเวลาที่จำเป็นเพื่อให้บรรลุวัตถุประสงค์ที่เกี่ยวข้องกับนโยบายฉบับนี้
          ซึ่งอาจจำเป็นต้องเก็บรักษาไว้ต่อไปภายหลังจากนั้น หากมีกฎหมายกำหนดไว้
          เราจะลบ ทำลาย หรือทำให้เป็นข้อมูลที่ไม่สามารถระบุตัวตนของคุณได้
          เมื่อหมดความจำเป็นหรือสิ้นสุดระยะเวลาดังกล่าว
        </Typography.Paragraph>

        <Typography.Title level={5}>
          สิทธิของเจ้าของข้อมูลส่วนบุคคล
        </Typography.Title>
        <Typography.Paragraph>
          คภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคล
          คุณมีสิทธิในการดำเนินการดังต่อไปนี้
        </Typography.Paragraph>
        <Typography.Paragraph>
          สิทธิขอถอนความยินยอม (right to withdraw consent)
          หากคุณได้ให้ความยินยอม เราจะเก็บรวบรวม ใช้
          หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ
          ไม่ว่าจะเป็นความยินยอมที่คุณให้ไว้ก่อนวันที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลใช้บังคับหรือหลังจากนั้น
          คุณมีสิทธิที่จะถอนความยินยอมเมื่อใดก็ได้ตลอดเวลา
        </Typography.Paragraph>
        <Typography.Paragraph>
          สิทธิขอเข้าถึงข้อมูล (right to access)
          คุณมีสิทธิขอเข้าถึงข้อมูลส่วนบุคคลของคุณที่อยู่ในความรับผิดชอบของเราและขอให้เราทำสำเนาข้อมูลดังกล่าวให้แก่คุณ
          รวมถึงขอให้เราเปิดเผยว่าเราได้ข้อมูลส่วนบุคคลของคุณมาได้อย่างไร
        </Typography.Paragraph>
        <Typography.Paragraph>
          สิทธิขอถ่ายโอนข้อมูล (right to data portability)
          คุณมีสิทธิขอรับข้อมูลส่วนบุคคลของคุณในกรณีที่เราได้จัดทำข้อมูลส่วนบุคคลนั้นอยู่ในรูปแบบให้สามารถอ่านหรือใช้งานได้ด้วยเครื่องมือหรืออุปกรณ์ที่ทำงานได้โดยอัตโนมัติและสามารถใช้หรือเปิดเผยข้อมูลส่วนบุคคลได้ด้วยวิธีการอัตโนมัติ
          รวมทั้งมีสิทธิขอให้เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นเมื่อสามารถทำได้ด้วยวิธีการอัตโนมัติ
          และมีสิทธิขอรับข้อมูลส่วนบุคคลที่เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นโดยตรง
          เว้นแต่ไม่สามารถดำเนินการได้เพราะเหตุทางเทคนิค
        </Typography.Paragraph>
        <Typography.Paragraph>
          สิทธิขอคัดค้าน (right to object) คุณมีสิทธิขอคัดค้านการเก็บรวบรวม ใช้
          หรือเปิดเผยข้อมูลส่วนบุคคลของคุณในเวลาใดก็ได้ หากการเก็บรวบรวม ใช้
          หรือเปิดเผยข้อมูลส่วนบุคคลของคุณที่ทำขึ้นเพื่อการดำเนินงานที่จำเป็นภายใต้ประโยชน์โดยชอบด้วยกฎหมายของเราหรือของบุคคลหรือนิติบุคคลอื่น
          โดยไม่เกินขอบเขตที่คุณสามารถคาดหมายได้อย่างสมเหตุสมผลหรือเพื่อดำเนินการตามภารกิจเพื่อสาธารณประโยชน์
        </Typography.Paragraph>
        <Typography.Paragraph>
          สิทธิขอให้ลบหรือทำลายข้อมูล (right to erasure/destruction)
          คุณมีสิทธิขอลบหรือทำลายข้อมูลส่วนบุคคลของคุณหรือทำให้ข้อมูลส่วนบุคคลเป็นข้อมูลที่ไม่สามารถระบุตัวคุณได้
          หากคุณเชื่อว่าข้อมูลส่วนบุคคลของคุณถูกเก็บรวบรวม ใช้
          หรือเปิดเผยโดยไม่ชอบด้วยกฎหมายที่เกี่ยวข้องหรือเห็นว่าเราหมดความจำเป็นในการเก็บรักษาไว้ตามวัตถุประสงค์ที่เกี่ยวข้องในนโยบายฉบับนี้
          หรือเมื่อคุณได้ใช้สิทธิขอถอนความยินยอมหรือใช้สิทธิขอคัดค้านตามที่แจ้งไว้ข้างต้นแล้ว
        </Typography.Paragraph>
        <Typography.Paragraph>
          สิทธิขอให้ระงับการใช้ข้อมูล (right to restriction of processing)
          คุณมีสิทธิขอให้ระงับการใช้ข้อมูลส่วนบุคคลชั่วคราวในกรณีที่เราอยู่ระหว่างตรวจสอบตามคำร้องขอใช้สิทธิขอแก้ไขข้อมูลส่วนบุคคลหรือขอคัดค้านของคุณหรือกรณีอื่นใดที่เราหมดความจำเป็นและต้องลบหรือทำลายข้อมูลส่วนบุคคลของคุณตามกฎหมายที่เกี่ยวข้องแต่คุณขอให้เราระงับการใช้แทน
        </Typography.Paragraph>
        <Typography.Paragraph>
          สิทธิขอให้แก้ไขข้อมูล (right to rectification)
          คุณมีสิทธิขอแก้ไขข้อมูลส่วนบุคคลของคุณให้ถูกต้อง เป็นปัจจุบัน สมบูรณ์
          และไม่ก่อให้เกิดความเข้าใจผิด
        </Typography.Paragraph>
        <Typography.Paragraph>
          สิทธิร้องเรียน (right to lodge a complaint)
          คุณมีสิทธิร้องเรียนต่อผู้มีอำนาจตามกฎหมายที่เกี่ยวข้อง
          หากคุณเชื่อว่าการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ
          เป็นการกระทำในลักษณะที่ฝ่าฝืนหรือไม่ปฏิบัติตามกฎหมายที่เกี่ยวข้อง
        </Typography.Paragraph>
        <Typography.Paragraph>
          คุณสามารถใช้สิทธิของคุณในฐานะเจ้าของข้อมูลส่วนบุคคลข้างต้นได้
          โดยติดต่อมาที่เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราตามรายละเอียดท้ายนโยบายนี้
          เราจะแจ้งผลการดำเนินการภายในระยะเวลา 30 วัน
          นับแต่วันที่เราได้รับคำขอใช้สิทธิจากคุณ
          ตามแบบฟอร์มหรือวิธีการที่เรากำหนด ทั้งนี้
          หากเราปฏิเสธคำขอเราจะแจ้งเหตุผลของการปฏิเสธให้คุณทราบผ่านช่องทางต่าง ๆ
          เช่น ข้อความ (SMS) อีเมล โทรศัพท์ จดหมาย เป็นต้น
        </Typography.Paragraph>

        <Typography.Title level={5}>การโฆษณาและการตลาด</Typography.Title>
        <Typography.Paragraph>
          เราอาจส่งข้อมูลหรือจดหมายข่าวไปยังอีเมลของคุณ
          โดยมีวัตถุประสงค์เพื่อเสนอสิ่งที่น่าสนกับคุณ
          หากคุณไม่ต้องการรับการติดต่อสื่อสารจากเราผ่านทางอีเมลอีกต่อไป
          คุณสามารถกด "ยกเลิกการติดต่อ"
          ในลิงก์อีเมลหรือติดต่อมายังอีเมลของเราได้
        </Typography.Paragraph>

        <Typography.Title level={5}>
          เทคโนโลยีติดตามตัวบุคคล (Cookies)
        </Typography.Title>
        <Typography.Paragraph>
          เพื่อเพิ่มประสบการณ์การใช้งานของคุณให้สมบูรณ์และมีประสิทธิภาพมากขึ้น
          เราใช้คุกกี้ (Cookies)หรือเทคโนโลยีที่คล้ายคลึงกัน
          เพื่อพัฒนาการเข้าถึงสินค้าหรือบริการ โฆษณาที่เหมาะสม
          และติดตามการใช้งานของคุณ
          เราใช้คุกกี้เพื่อระบุและติดตามผู้ใช้งานเว็บไซต์และการเข้าถึงเว็บไซต์ของเรา
          หากคุณไม่ต้องการให้มีคุกกี้ไว้ในคอมพิวเตอร์ของคุณ
          คุณสามารถตั้งค่าบราวเซอร์เพื่อปฏิเสธคุกกี้ก่อนที่จะใช้เว็บไซต์ของเราได้
        </Typography.Paragraph>

        <Typography.Title level={5}>
          การรักษาความมั่งคงปลอดภัยของข้อมูลส่วนบุคคล
        </Typography.Title>
        <Typography.Paragraph>
          ราจะรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคลของคุณไว้ตามหลักการ
          การรักษาความลับ (confidentiality) ความถูกต้องครบถ้วน (integrity)
          และสภาพพร้อมใช้งาน (availability) ทั้งนี้ เพื่อป้องกันการสูญหาย
          เข้าถึง ใช้ เปลี่ยนแปลง แก้ไข หรือเปิดเผย
          นอกจากนี้เราจะจัดให้มีมาตรการรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคล
          ซึ่งครอบคลุมถึงมาตรการป้องกันด้านการบริหารจัดการ (administrative
          safeguard) มาตรการป้องกันด้านเทคนิค (technical safeguard)
          และมาตรการป้องกันทางกายภาพ (physical safeguard)
          ในเรื่องการเข้าถึงหรือควบคุมการใช้งานข้อมูลส่วนบุคคล (access control)
        </Typography.Paragraph>

        <Typography.Title level={5}>
          การแจ้งเหตุละเมิดข้อมูลส่วนบุคคล
        </Typography.Title>
        <Typography.Paragraph>
          ในกรณีที่มีเหตุละเมิดข้อมูลส่วนบุคคลของคุณเกิดขึ้น
          เราจะแจ้งให้สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลทราบโดยไม่ชักช้าภายใน
          72 ชั่วโมง นับแต่ทราบเหตุเท่าที่สามารถกระทำได้
          ในกรณีที่การละเมิดมีความเสี่ยงสูงที่จะมีผลกระทบต่อสิทธิและเสรีภาพของคุณ
          เราจะแจ้งการละเมิดให้คุณทราบพร้อมกับแนวทางการเยียวยาโดยไม่ชักช้าผ่านช่องทางต่าง
          ๆ เช่น เว็บไซต์ ข้อความ (SMS) อีเมล โทรศัพท์ จดหมาย เป็นต้น
        </Typography.Paragraph>

        <Typography.Title level={5}>
          การแก้ไขเปลี่ยนแปลงนโยบายความเป็นส่วนตัว
        </Typography.Title>
        <Typography.Paragraph>
          เราอาจแก้ไขเปลี่ยนแปลงนโยบายนี้เป็นครั้งคราว
          โดยคุณสามารถทราบข้อกำหนดและเงื่อนไขนโยบายที่มีการแก้ไขเปลี่ยนแปลงนี้ได้ผ่านทางเว็บไซต์ของเรา
        </Typography.Paragraph>
        <Typography.Paragraph>
          นโยบายนี้แก้ไขล่าสุดและมีผลใช้บังคับตั้งแต่วันที่ 11 สิงหาคม 2565
        </Typography.Paragraph>

        <Typography.Title level={5}>
          นโยบายความเป็นส่วนตัวของเว็บไซต์อื่น
        </Typography.Title>
        <Typography.Paragraph>
          นโยบายความเป็นส่วนตัวฉบับนี้ใช้สำหรับการเสนอสินค้า บริการ
          และการใช้งานบนเว็บไซต์สำหรับลูกค้าของเราเท่านั้น
          หากคุณเข้าชมเว็บไซต์อื่นแม้จะผ่านช่องทางเว็บไซต์ของเรา
          การคุ้มครองข้อมูลส่วนบุคคลต่าง ๆ
          จะเป็นไปตามนโยบายความเป็นส่วนตัวของเว็บไซต์นั้น
          ซึ่งเราไม่มีส่วนเกี่ยวข้องด้วย
        </Typography.Paragraph>

        <Typography.Title level={5}>รายละเอียดการติดต่อ</Typography.Title>
        <Typography.Paragraph>
          หากคุณต้องการสอบถามข้อมูลเกี่ยวกับนโยบายความเป็นส่วนตัวฉบับนี้
          รวมถึงการขอใช้สิทธิต่าง ๆ
          คุณสามารถติดต่อเราหรือเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราได้
          ดังนี้
        </Typography.Paragraph>

        <Typography.Paragraph>
          <b>ผู้ควบคุมข้อมูลส่วนบุคคล</b>
        </Typography.Paragraph>

        <Typography.Paragraph>
          บริษัท ลิตเติ้ล บีน ซอฟท์ จำกัด
        </Typography.Paragraph>

        <Typography.Paragraph>
          2 อาคารมาริโกลด์ ทาวเวอร์ สุวรรณภูมิ ชั้น 2 ห้องเลขที่ 1207
          ซอยลาดกระบัง 1 ถนนอ่อนนุช-ลาดกระบัง ลาดกระบัง ลาดกระบัง กรุงเทพมหานคร
          10520
        </Typography.Paragraph>

        <Typography.Paragraph>
          อีเมล contact@littlebeansoft.com
        </Typography.Paragraph>

        <Typography.Paragraph>
          เว็บไซต์ www.littlebeansoft.com
        </Typography.Paragraph>

        <Typography.Paragraph>หมายเลขโทรศัพท์ 02 042 9919</Typography.Paragraph>

        <Typography.Paragraph>
          <b>เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล</b>
        </Typography.Paragraph>

        <Typography.Paragraph>ฝ่ายคุ้มครองข้อมูลส่วนบุคคล</Typography.Paragraph>

        <Typography.Paragraph>
          2 อาคารมาริโกลด์ ทาวเวอร์ สุวรรณภูมิ ชั้น 2 ห้องเลขที่ 1207
          ซอยลาดกระบัง 1 ถนนอ่อนนุช-ลาดกระบัง ลาดกระบัง ลาดกระบัง กรุงเทพมหานคร
          10520
        </Typography.Paragraph>

        <Typography.Paragraph>
          อีเมล pdpa@littlebeansoft.com
        </Typography.Paragraph>

        <Typography.Paragraph>หมายเลขโทรศัพท์ 02 042 9919</Typography.Paragraph>
      </ContentContainer>
    </PageLayout>
  )
}

export default PrivacyPolicyTHPage

export const ContentContainer = styled.div`
  --gap: 60px;

  margin-top: 60px;
  padding: 0 var(--gap);
  min-height: calc(100vh - 364px);

  @media (max-width: 1420px) {
    --gap: 24px;
  }
`
