import {
  ArrowLeft,
  CheckCircle,
  User,
  Activity,
  Lock,
  Droplet,
  Apple,
  HeartPulse,
  Leaf,
  Scale,
  ActivitySquare,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { BadgePill } from "@/components/ui/badge-pill";
import { NavItem } from "@/components/ui/nav-item";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background font-sans overflow-x-hidden">
      {/* Background blobs/gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[60%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[50%] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col pt-6 pb-20 gap-16">
        {/* Navbar */}
        <header className="flex items-center justify-between w-full z-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border border-primary/20 bg-primary/5 text-primary">
              <Leaf className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground leading-tight">دکتر رضا سرورزاده</span>
              <span className="text-xs text-muted-foreground">تغذیه بالینی و رژیم‌درمانی</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <NavItem href="#" label="صفحه اصلی" isActive={true} />
            <NavItem href="#" label="خدمات" />
            <NavItem href="#" label="درباره من" />
            <NavItem href="#" label="شرایط تحت درمان" />
            <NavItem href="#" label="مقالات" />
            <NavItem href="#" label="تماس با من" />
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="pillPrimary" size="default" className="gap-2 hidden md:flex rounded-full px-6">
              رزرو مشاوره
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full pt-8">
          {/* Right Side: Text Content (RTL) */}
          <div className="flex flex-col items-start gap-8 lg:w-1/2 z-10">
            <BadgePill>تغذیه علمی • سلامت پایدار</BadgePill>
            
            <Heading as="h1" size="h1" className="text-foreground leading-[1.2]">
              تغذیه شخصی‌سازی شده <br />
              برای کنترل بهتر <span className="text-primary">دیابت</span> <br />
              و سلامتی <span className="text-primary">پایدار</span> شما
            </Heading>

            <Paragraph size="lg" className="max-w-[480px]">
              با برنامه‌های غذایی علمی و متناسب با شرایط شما، سلامت‌تان را از امروز بسازید.
            </Paragraph>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Button variant="pillPrimary" size="pill" className="gap-2">
                رزرو مشاوره
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button variant="pillSecondary" size="pill" className="gap-2 bg-white/50 hover:bg-white/80">
                بیشتر بدانید
                <ArrowLeft className="h-5 w-5 text-muted-foreground" />
              </Button>
            </div>
          </div>

          {/* Left Side: Image and Floating Cards (RTL) */}
          <div className="relative flex justify-center lg:w-1/2 mt-12 lg:mt-0">
            {/* The background large circle for image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-3xl -z-10" />
            
            {/* Doctor Image */}
            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] z-10 flex items-end justify-center">
              {/* Fallback image if doctor cutout isn't available, using a placeholder with similar aspect */}
              <div className="w-full h-full bg-gradient-to-t from-primary/20 to-transparent rounded-[100px] overflow-hidden flex items-end">
                <Image 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Doctor" 
                  width={400} 
                  height={500}
                  className="object-cover w-full h-full object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Floating Cards */}
            <GlassCard className="absolute top-[10%] -right-4 md:-right-12 z-20 flex items-center gap-4 p-3 pr-4 rounded-2xl w-max shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <div className="flex flex-col items-start gap-0.5">
                <span className="font-bold text-sm text-foreground">مدیریت دیابت</span>
                <span className="text-[10px] text-muted-foreground">کنترل قند خون با تغذیه اصولی</span>
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <Droplet className="w-5 h-5 fill-primary/20" />
              </div>
            </GlassCard>

            <GlassCard className="absolute top-[45%] -right-8 md:-right-20 z-20 flex items-center gap-4 p-3 pr-4 rounded-2xl w-max shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="flex flex-col items-start gap-0.5">
                <span className="font-bold text-sm text-foreground">کاهش وزن سالم</span>
                <span className="text-[10px] text-muted-foreground">کاهش وزن پایدار بدون محرومیت</span>
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <Apple className="w-5 h-5 fill-primary/20" />
              </div>
            </GlassCard>

            <GlassCard className="absolute bottom-[15%] -right-4 md:-right-12 z-20 flex items-center gap-4 p-3 pr-4 rounded-2xl w-max shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <div className="flex flex-col items-start gap-0.5">
                <span className="font-bold text-sm text-foreground">سلامت قلب و عروقی</span>
                <span className="text-[10px] text-muted-foreground">بهبود جریان خون و فشار خون</span>
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <HeartPulse className="w-5 h-5" />
              </div>
            </GlassCard>
          </div>
        </main>

        {/* Feature Glass Cards Section */}
        <section className="w-full mt-12 relative z-20">
          <GlassCard intensity="heavy" className="grid grid-cols-1 gap-6 p-6 md:grid-cols-4 bg-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-white">
            <div className="flex flex-col items-center gap-3 p-4 text-center border-b md:border-b-0 md:border-l border-border/50 last:border-0">
              <CheckCircle className="h-7 w-7 text-primary" />
              <div>
                <h3 className="font-bold text-sm text-foreground">علمی و مبتنی بر شواهد</h3>
                <p className="mt-1 text-[11px] text-muted-foreground">برنامه‌های تغذیه بر پایه جدیدترین تحقیقات</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 text-center border-b md:border-b-0 md:border-l border-border/50 last:border-0">
              <User className="h-7 w-7 text-primary" />
              <div>
                <h3 className="font-bold text-sm text-foreground">کاملاً شخصی‌سازی شده</h3>
                <p className="mt-1 text-[11px] text-muted-foreground">متناسب با شرایط جسمی، سبک زندگی و اهداف شما</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 text-center border-b md:border-b-0 md:border-l border-border/50 last:border-0">
              <Activity className="h-7 w-7 text-primary" />
              <div>
                <h3 className="font-bold text-sm text-foreground">پیگیری و پشتیبانی</h3>
                <p className="mt-1 text-[11px] text-muted-foreground">همراهی مستمر تا رسیدن به نتیجه دلخواه</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 text-center last:border-0">
              <Lock className="h-7 w-7 text-primary" />
              <div>
                <h3 className="font-bold text-sm text-foreground">اطلاعات امن و محرمانه</h3>
                <p className="mt-1 text-[11px] text-muted-foreground">اطلاعات شما کاملاً محرمانه خواهد ماند</p>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Conditions Section */}
        <section className="flex flex-col items-center gap-8 mt-12 mb-12">
          <Heading as="h2" size="h4" className="text-foreground">
            شرایطی که می‌توانم به شما کمک کنم
          </Heading>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl">
            <BadgePill className="bg-white hover:bg-primary/5 transition-colors cursor-default py-2.5 px-5 shadow-sm text-foreground border-border/50 gap-3">
              <Droplet className="w-4 h-4 text-primary" />
              دیابت نوع ۲
            </BadgePill>
            
            <BadgePill className="bg-white hover:bg-primary/5 transition-colors cursor-default py-2.5 px-5 shadow-sm text-foreground border-border/50 gap-3">
              <Stethoscope className="w-4 h-4 text-primary" />
              پیش دیابت
            </BadgePill>

            <BadgePill className="bg-white hover:bg-primary/5 transition-colors cursor-default py-2.5 px-5 shadow-sm text-foreground border-border/50 gap-3">
              <Scale className="w-4 h-4 text-primary" />
              کاهش وزن
            </BadgePill>

            <BadgePill className="bg-white hover:bg-primary/5 transition-colors cursor-default py-2.5 px-5 shadow-sm text-foreground border-border/50 gap-3">
              <ActivitySquare className="w-4 h-4 text-primary" />
              سندرم تخمدان پلی‌کیستیک
            </BadgePill>

            <BadgePill className="bg-white hover:bg-primary/5 transition-colors cursor-default py-2.5 px-5 shadow-sm text-foreground border-border/50 gap-3">
              <HeartPulse className="w-4 h-4 text-primary" />
              کلسترول و چربی خون
            </BadgePill>

            <BadgePill className="bg-white hover:bg-primary/5 transition-colors cursor-default py-2.5 px-5 shadow-sm text-foreground border-border/50 gap-3">
              <HeartPulse className="w-4 h-4 text-primary" />
              فشار خون بالا
            </BadgePill>
          </div>
        </section>
      </div>
    </div>
  );
}
