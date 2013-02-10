from django.views.generic import TemplateView
import settings

class ZorcraftBaseView(TemplateView):

    class Meta:
        abstract = True

    def get_context_data(self, **kwargs):
        context = super(ZorcraftBaseView, self).get_context_data(**kwargs)
        context['settings'] = settings

        return context

class HomeView(ZorcraftBaseView):
    template_name = 'home.html'

home_view = HomeView.as_view()