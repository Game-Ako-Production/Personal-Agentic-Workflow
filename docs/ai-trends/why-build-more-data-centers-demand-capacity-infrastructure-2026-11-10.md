# Why Build More Data Centers If Capacity Already Exists?

**Scope:** Research note on whether data center construction is simply meeting current demand or building ahead of future demand, and how this compares with fiber and railway infrastructure.
**As of:** November 10, 2026

## Main conclusion

The “build the farmland before the crops” analogy is useful. Data centers take years to plan, permit, power, and equip, while software demand can rise much faster. Companies therefore invest ahead of fully realized demand so capacity is ready for future customers and workloads.

The analogy needs a caveat: there can be many data center buildings in aggregate while usable capacity is scarce in particular markets or for particular workloads. A facility also needs adequate electricity, cooling, network connections, and servers. Existing buildings may not be designed for dense AI accelerator racks.

## What current capacity data says

In North America’s primary data center markets, CBRE reported a 1.4% vacancy rate in the first half of 2026. More than 80% of capacity under construction was preleased, leaving less than six months of available supply at the then-current rate of demand. This indicates tight capacity in those markets, but does not establish that every type of compute is scarce everywhere. ([CBRE, August 27, 2026](https://www.cbre.com/press-releases/north-american-data-center-demand-continues-to-outpace-supply-despite-record-construction-activity))

Announced projects should not be treated as operating capacity. The IEA notes that many projects in the pipeline will not come to fruition, and that a facility's load generally ramps as servers and customer workloads come online. ([IEA, Key Questions on Energy and AI](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary))

## Why build ahead of demand?

Cloud software can appear to scale instantly because operators can allocate virtual machines and services quickly when physical capacity is already installed. That flexibility does not make new buildings, power connections, transformers, or servers appear instantly. The IEA describes a mismatch between fast-moving AI adoption and slower-moving power, grid, and semiconductor supply chains.

The IEA projects global data center electricity use to roughly double from 485 TWh in 2025 to 950 TWh in 2030, with AI-focused data center use growing faster. These are forecasts, not certain outcomes. It also reports that energy use per AI task has fallen sharply while newer workloads—such as video generation, reasoning, and agentic tasks—can use hundreds or thousands of times more energy per query than simple text generation. Efficiency can lower the cost of each task while broader adoption and more demanding workloads still increase total demand. ([IEA](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary))

Companies may build ahead to have capacity ready for new customers, secure sites and power before they become harder to obtain, support new uses as AI develops, avoid losing business to competitors with available capacity, and gain operating efficiencies from scale. This is a strategic investment bet, not a guarantee that every announced project will be needed or profitable.

## Lessons from fiber and railways

### Fiber

During the late-1990s telecom boom, companies built more long-haul fiber capacity than near-term demand could use. Some strands remained unused as “dark fiber.” That overbuilding caused major financial losses, but the installed capacity later provided room for internet traffic and new services to grow. A historical study documents both the scale of investment and how transmission technology improved faster than demand at the time. ([Research on U.S. fiber overbuilding](https://www.sciencedirect.com/science/article/abs/pii/S0308596111001613))

### Railways

A historical study of Swedish rural areas found substantial long-term economic effects from railway access, consistent with the idea that coordinated infrastructure can help create economic activity beyond what existed when the line was built. That does not mean every route was worthwhile; the railway era also included overcapitalization and unprofitable projects. ([Study of railway investment and economic effects](https://arxiv.org/abs/2106.00348); [“Railroad Over-Capitalization”](https://www.jstor.org/stable/1885648))

## Synthesis and risk

Today’s capacity constraints and a future overbuild can both be true. Capacity can be tight in particular locations and for specific workloads, while long lead times and optimistic forecasts can still lead companies to build more than the market ultimately needs. Infrastructure can enable future demand rather than merely satisfy current demand, but outcomes depend on timing, location, financing, and the amount of capacity built. The fiber and railway analogies support building ahead in some cases while warning that excess, misplaced, or poorly financed capacity can become a costly glut.
