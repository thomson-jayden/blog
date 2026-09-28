export default function DesignShowcase() {
  return (
    <main className="min-h-screen">
      <div className="navbar bg-base-100/90 px-6 shadow-sm backdrop-blur md:px-12">
        <div className="flex-1">
          <a
            className="btn btn-ghost text-xl font-black tracking-tight"
            href="/"
          >
            <span className="text-primary">/</span>studio
          </a>
        </div>
        <div className="flex-none gap-2">
          <a
            className="btn btn-ghost btn-sm hidden md:inline-flex"
            href="#components"
          >
            Components
          </a>
          <button className="btn btn-primary btn-sm">Get started</button>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
        <div className="max-w-3xl">
          <div className="badge badge-primary badge-outline mb-6 gap-2 px-4 py-3">
            <span className="status status-success" />
            daisyUI + Tailwind CSS
          </div>
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Build beautiful interfaces{' '}
            <span className="text-primary">without the busywork.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-base-content/70">
            A tiny design kit for thoughtful products. Use semantic component
            classes, ship faster, and keep your UI consistent from the first
            screen to the last.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="btn btn-primary">
              Explore the kit <span aria-hidden="true">→</span>
            </button>
            <button className="btn btn-ghost">View documentation</button>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <Stat
            label="Components"
            value="50+"
            detail="Ready to compose"
            valueClass="text-primary"
          />
          <Stat
            label="Themes"
            value="35"
            detail="Light and dark included"
            valueClass="text-secondary"
          />
          <Stat label="Setup time" value="5m" detail="From zero to shipped" />
        </div>
      </section>

      <section className="bg-base-100 px-6 py-20 md:px-12" id="components">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="font-bold uppercase tracking-[0.2em] text-primary">
              Primitives
            </p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              A flexible foundation
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card bg-base-200 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Ship with confidence</h3>
                <p className="text-base-content/70">
                  Semantic classes make every decision readable and every
                  component easy to adjust.
                </p>
                <div className="card-actions mt-4 justify-end">
                  <button className="btn btn-secondary btn-sm">
                    Learn more
                  </button>
                </div>
              </div>
            </div>

            <div className="card border border-base-300 bg-base-100">
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <h3 className="card-title">System status</h3>
                  <div className="badge badge-success">Operational</div>
                </div>
                <div className="mt-4 space-y-3">
                  <Progress label="API" value={92} variant="progress-primary" />
                  <Progress
                    label="Web app"
                    value={78}
                    variant="progress-secondary"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="alert alert-info mt-6">
            <span aria-hidden="true">✦</span>
            <span>
              Everything here is built with daisyUI semantic components.
            </span>
            <button className="btn btn-info btn-sm ml-auto">Nice!</button>
          </div>
        </div>
      </section>

      <footer className="footer footer-center bg-neutral p-10 text-neutral-content">
        <aside>
          <p className="font-bold">/studio design kit</p>
          <p>Made for focused teams and ambitious ideas.</p>
        </aside>
      </footer>
    </main>
  );
}

function Stat({
  label,
  value,
  detail,
  valueClass = '',
}: {
  label: string;
  value: string;
  detail: string;
  valueClass?: string;
}) {
  return (
    <div className="stat rounded-box bg-base-100 shadow-sm">
      <div className="stat-title">{label}</div>
      <div className={`stat-value ${valueClass}`}>{value}</div>
      <div className="stat-desc">{detail}</div>
    </div>
  );
}

function Progress({
  label,
  value,
  variant,
}: {
  label: string;
  value: number;
  variant: string;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span>{label}</span>
      <progress
        className={`progress ${variant} w-40`}
        value={value}
        max="100"
      />
    </div>
  );
}
